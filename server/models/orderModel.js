import { sequelize } from "../db";
import { DataTypes } from "sequelize";

const Order = sequelize.define(
    "order",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('открыт', "закрыт", 'отменён'),
            allowNull: false,
            defaultValue: 'открыт'
        },
        clientid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        totalPrice: {
            type: DataTypes.DECIMAL,
            defaultValue: 0,
            allowNull: false
        }
    },
    {

    },
)