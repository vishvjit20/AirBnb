import logger from "../config/logger";
import { Hotel } from "../db/models/hotels";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";

export async function createHotel(hotelData: createHotelDTO) {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount,
  });

  logger.info(`Hotel created with ID: ${hotel.id}`);
  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) {
    logger.warn(`Hotel with ID ${id} not found`);
    throw new NotFoundError(`Hotel with ID ${id} not found`);
  }
  logger.info(`Hotel retrieved: ${hotel.name}`);
  return hotel;
}

export async function getAllHotels() {
  const hotels = await Hotel.findAll();
  logger.info(`Retrieved ${hotels.length} hotels`);
  return hotels;
}
