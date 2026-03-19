import { sequelize } from "../db";
import { DataTypes } from "sequelize";

const Product = sequelize.define(
    "product",
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
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
            defaultValue: 0
        }
    },
    {

    },
)