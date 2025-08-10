import { QueryInterface } from "sequelize";

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      ADD CONSTRAINT fk_room_category
      FOREIGN KEY (room_category_id)
      REFERENCES room_categories(id)
      ON DELETE CASCADE
      ON UPDATE CASCADE;
    `);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(`
      ALTER TABLE rooms
      DROP FOREIGN KEY fk_room_category;
    `);
  },
};
