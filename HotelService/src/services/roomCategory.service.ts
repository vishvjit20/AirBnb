import { createRoomCategoryDto } from "../dto/roomCategory.dto";
import HotelRepository from "../repositories/hotel.repository";
import RoomCategoryRepository from "../repositories/roomCategory.repository";
import { BadRequestError } from "../utils/errors/app.error";

const roomCategoryRepository = new RoomCategoryRepository();
const hotelRepository = new HotelRepository();

export const createRoomCategoryService = async (
  createRoomCategoryDto: createRoomCategoryDto
) => {
  return await roomCategoryRepository.create(createRoomCategoryDto);
};

export async function getRoomCategoryByIdService(id: number) {
  const roomCategory = await roomCategoryRepository.findById(id);
  if (!roomCategory) {
    throw new Error(`Room category with ID ${id} not found`);
  }
  if (roomCategory.deletedAt !== null) {
    throw new BadRequestError(`Room category with ID ${id} is deleted`);
  }
  return roomCategory;
}

export const getAllRoomCategoriesByHotelIdService = async (hotelId: number) => {
  // Check if hotel exists
  const hotel = await hotelRepository.findById(hotelId);
  if (!hotel) {
    throw new Error(`Hotel with ID ${hotelId} not found`);
  }

  // Find all room Categories by hotel Id
  const roomCategories = await roomCategoryRepository.findAllHotelById(hotelId);
  return roomCategories;
};

export const deleteRoomCategoryService = async (id: number) => {
  const roomCategory = await roomCategoryRepository.findById(id);
  if (!roomCategory) {
    throw new Error(`Room category with ID ${id} not found`);
  }
  await roomCategoryRepository.delete({ id });
  return true;
};
