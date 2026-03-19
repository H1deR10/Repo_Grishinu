import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define(
    "cart",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }
)