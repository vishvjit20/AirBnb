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
  if (!hotel || hotel.deletedAt !== null) {
    logger.warn(`Hotel with ID ${id} not found`);
    throw new NotFoundError(`Hotel with ID ${id} not found`);
  }
  logger.info(`Hotel retrieved: ${hotel.name}`);
  return hotel;
}

export async function getAllHotels() {
  const hotels = await Hotel.findAll({
    where: {
      deletedAt: null, // Ensure we only get non-deleted hotels
    },
  });
  logger.info(`Retrieved ${hotels.length} hotels`);
  return hotels;
}

export async function softDeleteHotel(id: number) {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) {
    logger.warn(`Hotel with ID ${id} not found for deletion`);
    throw new NotFoundError(`Hotel with ID ${id} not found`);
  }

  hotel.deletedAt = new Date();
  await hotel.save();
  logger.info(`Hotel with ID ${id} soft deleted`);
  return true;
}
