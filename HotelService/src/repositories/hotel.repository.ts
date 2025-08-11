import logger from "../config/logger";
import { Hotel } from "../db/models/hotels";
import { NotFoundError } from "../utils/errors/app.error";
import BaseRepository from "./base.repository";

class HotelRepository extends BaseRepository<Hotel> {
  constructor() {
    super(Hotel);
  }

  async delete(whereOptions: { id: number }): Promise<void> {
    await this.model.destroy({
      where: { ...whereOptions },
    });
  }

  async findAll() {
    const hotels = await Hotel.findAll({
      where: {
        deletedAt: null, // Ensure we only get non-deleted hotels
      },
    });
    logger.info(`Retrieved ${hotels.length} hotels`);
    return hotels;
  }

  async softDeleteHotel(id: number) {
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
}

export default HotelRepository;
