import { sequelize } from "../db";
import { DataTypes } from "sequelize";

const client = sequelize.define(
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
    },
    {
        createAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updateAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    },
)