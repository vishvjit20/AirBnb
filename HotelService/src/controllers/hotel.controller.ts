import { Request, Response, NextFunction } from "express";
import { createHotelDTO } from "../dto/hotel.dto";
import {
  createHotelService,
  deleteHotelService,
  getAllHotelsService,
  getHotelByIdService,
} from "../services/hotel.service";

export async function createHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelData: createHotelDTO = req.body;
  const hotelResponse = await createHotelService(hotelData);
  res.status(201).json({
    message: "Hotel created successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getHotelByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));

  res.status(200).json({
    message: "Hotel retrieved successfully",
    data: hotelResponse,
    success: true,
  });
}

export async function getAllHotelsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelsResponse = await getAllHotelsService();

  res.status(200).json({
    message: "Hotels retrieved successfully",
    data: hotelsResponse,
    success: true,
  });
}

export async function deleteHotelHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const hotelId = Number(req.params.id);
  await deleteHotelService(hotelId);

  res.status(200).json({
    message: "Hotel deleted successfully",
    success: true,
  });
}
