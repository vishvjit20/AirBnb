import { Prisma } from "@prisma/client";
import {
  confirmBooking,
  createBooking,
  createIdempotencyKey,
  finalizeIdempotencyKey,
  getIdempotencyKey,
} from "../repositories/booking.repository";
import { generateIdempotencyKey } from "../utils/generateIdempotencyKey";
import { BadRequestError, NotFoundError } from "../utils/errors/app.error";
import { CreateBookingDTO } from "../dto/booking.dto";

export async function createBookingService(createBookingDTO: CreateBookingDTO) {
  const booking = await createBooking({
    userId: createBookingDTO.userId,
    hotelId: createBookingDTO.hotelId,
    totalGuests: createBookingDTO.totalGuests,
    bookingAmount: createBookingDTO.bookingAmount,
  });

  const idempotencyKey = generateIdempotencyKey();

  await createIdempotencyKey(idempotencyKey, booking.id);

  return { bookingId: booking.id, idempotencyKey };
}

export async function finalizeBookingService(idempotencyKey: string) {
  const idempotencyKeyData = await getIdempotencyKey(idempotencyKey);

  if (!idempotencyKeyData) {
    throw new NotFoundError("Idempotency key not found");
  }

  if (idempotencyKeyData.finalized) {
    throw new BadRequestError("Idempotency key already finalized");
  }

  // Finalize the booking process
  const booking = await confirmBooking(idempotencyKeyData.bookingId);
  await finalizeIdempotencyKey(idempotencyKey);

  return booking;
}
