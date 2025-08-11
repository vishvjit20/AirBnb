import logger from "../config/logger";
import { RoomCategory } from "../db/models/roomCategory";
import BaseRepository from "./base.repository";

class RoomCategoryRepository extends BaseRepository<RoomCategory> {
  constructor() {
    super(RoomCategory);
  }

  async findAllHotelById(hotelId: number): Promise<RoomCategory[]> {
    return await RoomCategory.findAll({
      where: { hotelId, deletedAt: null },
    });
  }
}

export default RoomCategoryRepository;
