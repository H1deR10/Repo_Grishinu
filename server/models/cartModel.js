import { sequelize } from "../db";
import { DataTypes } from "sequelize";

const Cart = sequelize.define(
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
    },
    {

    },
)