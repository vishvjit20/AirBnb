import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      ADD CONSTRAINT fk_room_hotel
      FOREIGN KEY (hotel_id)
      REFERENCES hotels(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `);
  },

  async down(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      DROP FOREIGN KEY fk_room_hotel;
    `);
  },
};
