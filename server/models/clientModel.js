import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Client = sequelize.define(
    "client",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        rating: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        bday: {
            type: DataTypes.DATEONLY
        }
    }
)