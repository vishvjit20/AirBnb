import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "./sequelize";

export class Room extends Model<
  InferAttributes<Room>,
  InferCreationAttributes<Room>
> {
  declare id: CreationOptional<number>;
  declare hotelId: number;
  declare roomCategoryId: number;
  declare dateOfAvailability: Date;
  declare price: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
  declare bookingId?: number | null;
}

Room.init(
  {
    id: {
      type: "INTEGER",
      autoIncrement: true,
      primaryKey: true,
    },
    hotelId: {
      type: "INTEGER",
      allowNull: false,
      references: {
        model: "Hotel",
        key: "id",
      },
    },
    roomCategoryId: {
      type: "INTEGER",
      allowNull: false,
      references: {
        model: "RoomCategory",
        key: "id",
      },
    },
    dateOfAvailability: {
      type: "DATE",
      allowNull: false,
    },
    price: {
      type: "FLOAT",
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
    },
    deletedAt: {
      type: "TIMESTAMP",
      defaultValue: null,
    },
    bookingId: {
      type: "INTEGER",
      defaultValue: null,
    },
  },
  {
    tableName: "rooms",
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
  }
);
