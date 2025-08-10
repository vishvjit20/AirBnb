import { QueryInterface } from "sequelize";
import { query } from "winston";
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert("hotels", [
      {
        id: 1,
        name: "Hotel California",
        location: "Los Angeles",
        address: "123 Sunset Blvd",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        name: "Hotel Transylvania",
        location: "Transylvania",
        address: "456 Dracula Ave",
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        name: "Hotel New York",
        location: "New York",
        address: "789 Broadway",
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);

    await queryInterface.bulkInsert("room_categories", [
      {
        hotel_id: 1,
        price: 3500,
        roomType: "SINGLE",
        roomCount: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        hotel_id: 1,
        price: 4500,
        roomType: "DOUBLE",
        roomCount: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        hotel_id: 1,
        price: 6500,
        roomType: "SUITE",
        roomCount: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);

    await queryInterface.bulkInsert("rooms", [
      {
        id: 1,
        hotel_id: 1,
        room_category_id: 1,
        date_of_availability: "2025-08-10",
        room_no: 1,
        bookingId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        hotel_id: 1,
        room_category_id: 2,
        date_of_availability: "2025-08-14",
        room_no: 2,
        bookingId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        hotel_id: 1,
        room_category_id: 3,
        date_of_availability: "2025-08-12",
        room_no: 3,
        bookingId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("rooms", {}, {});
    await queryInterface.bulkDelete("room_categories", {}, {});
    await queryInterface.bulkDelete("hotels", {}, {});
  },
};
