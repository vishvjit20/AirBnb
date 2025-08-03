import { Prisma } from "@prisma/client";
import { createBooking } from "../repositories/booking.repository";

export async function createBookingService(
  bookingInput: Prisma.BookingCreateInput
) {
  try {
    const booking = await createBooking(bookingInput);
    return booking;
  } catch (error) {
    console.error("Error creating booking:", error);
    throw new Error("Booking creation failed");
  }
}

export async function filalizeBookingService() {}
