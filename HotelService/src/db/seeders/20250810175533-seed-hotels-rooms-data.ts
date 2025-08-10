import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    // await queryInterface.bulkInsert("hotels", [
    //   {
    //     id: 1,
    //     name: "Hotel California",
    //     location: "Los Angeles",
    //     address: "123 Sunset Blvd",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     deleted_at: null,
    //   },
    //   {
    //     id: 2,
    //     name: "Hotel Transylvania",
    //     location: "Transylvania",
    //     address: "456 Dracula Ave",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     deleted_at: null,
    //   },
    //   {
    //     id: 3,
    //     name: "Hotel New York",
    //     location: "New York",
    //     address: "789 Broadway",
    //     created_at: new Date(),
    //     updated_at: new Date(),
    //     deleted_at: null,
    //   },
    // ]);

    await queryInterface.bulkInsert("room_categories", [
      {
        hotel_id: 1,
        price: 3500,
        room_type: "SINGLE",
        room_count: 10,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        hotel_id: 1,
        price: 4500,
        room_type: "DOUBLE",
        room_count: 5,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        hotel_id: 1,
        price: 6500,
        room_type: "SUITE",
        room_count: 2,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);

    await queryInterface.bulkInsert("rooms", [
      {
        id: 1,
        hotel_id: 1,
        room_category_id: 1,
        date_of_availability: "2025-08-10",
        room_no: 1,
        booking_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 2,
        hotel_id: 1,
        room_category_id: 2,
        date_of_availability: "2025-08-14",
        room_no: 2,
        booking_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 3,
        hotel_id: 1,
        room_category_id: 3,
        date_of_availability: "2025-08-12",
        room_no: 3,
        booking_id: null,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("rooms", {}, {});
    await queryInterface.bulkDelete("room_categories", {}, {});
    await queryInterface.bulkDelete("hotels", {}, {});
  },
};
