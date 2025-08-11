import { createHotelDTO } from "../dto/hotel.dto";
import HotelRepository from "../repositories/hotel.repository";
import { BadRequestError } from "../utils/errors/app.error";

const hotelRepository = new HotelRepository();

export async function createHotelService(hotelData: createHotelDTO) {
  const hotel = await hotelRepository.create(hotelData);
  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await hotelRepository.findById(id);
  if (!hotel) {
    throw new Error(`Hotel with ID ${id} not found`);
  }
  if (hotel.deletedAt !== null) {
    throw new BadRequestError(`Hotel with ID ${id} is deleted`);
  }
  return hotel;
}

export async function getAllHotelsService() {
  const hotels = await hotelRepository.findAll();
  return hotels;
}

export async function deleteHotelService(id: number) {
  const response = await hotelRepository.softDeleteHotel(id);
  return response;
}
