import { sequelize } from "../db.js";
import { Cart } from "./CartModel.js"
import { Client } from "./clientModel.js"
import { Order } from "./OrderModel.js"
import { Product } from "./ProductModel.js"

Client.hasMany(Order)
Order.belongsTo(Client)

Product.belongsToMany(Order, {through: Cart})
Order.belongsToMany(Product, {through: Cart})

export { sequelize, Cart, Client, Order, Product }