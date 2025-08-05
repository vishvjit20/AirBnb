import { Request, Response } from "express";
import {
  createBookingService,
  finalizeBookingService,
} from "../services/booking.service";

export const createBookingHandler = async (req: Request, res: Response) => {
  const { userId, hotelId, totalGuests, bookingAmount } = req.body;

  const booking = await createBookingService({
    userId,
    hotelId,
    totalGuests,
    bookingAmount,
  });
  res.status(201).json({
    bookingId: booking.bookingId,
    idempotencyKey: booking.idempotencyKey,
  });
};

export const confirmBookingHandler = async (req: Request, res: Response) => {
  const { idempotencyKey } = req.params;

  const booking = await finalizeBookingService(idempotencyKey);
  res.status(200).json({
    bookingId: booking.id,
    status: booking.status,
  });
};
