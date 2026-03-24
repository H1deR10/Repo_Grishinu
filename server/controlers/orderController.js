import { Order } from '../models/orderModel.js'

export const getAllOrders = async (req, res) => {
    try {
        const getAllOrders = await Order.findAll() 
        res.status(200).json(getAllOrders)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
}


export const createOrder = async (req, res) => {
    try {
        const { status, date, totalPrice } = req.body

        const newOrder = await Order.create( {status, date, totalPrice} ) 
        res.status(201).json(newOrder)
    } catch (error) {
        console.error("Не удалось добавить клиента")
    }
}