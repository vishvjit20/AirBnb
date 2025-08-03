import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import sequelize from "./sequelize";

export class Hotel extends Model<
  InferAttributes<Hotel>,
  InferCreationAttributes<Hotel>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare address: string;
  declare location: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date | null>;
  declare rating?: number;
  declare ratingCount?: number;
}

Hotel.init(
  {
    id: {
      type: "INTEGER",
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: "STRING",
      allowNull: false,
    },
    address: {
      type: "STRING",
      allowNull: false,
    },
    location: {
      type: "STRING",
      allowNull: false,
    },
    createdAt: {
      type: "DATE",
      defaultValue: new Date(),
    },
    deletedAt: {
      type: "DATE",
      allowNull: true,
      defaultValue: null,
    },
    updatedAt: {
      type: "DATE",
      defaultValue: new Date(),
    },
    rating: {
      type: "FLOAT",
      allowNull: false,
      defaultValue: 0,
    },
    ratingCount: {
      type: "INTEGER",
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "hotels",
    sequelize,
    timestamps: true,
    underscored: true,
  }
);
