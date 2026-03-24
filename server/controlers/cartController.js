import { Cart } from '../models/cartModel.js'

export const getAllCarts = async (req, res) => {
    try {
        const getAllCarts = await Cart.findAll() 
        res.status(200).json(getAllCarts)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
}


export const createCart = async (req, res) => {
    try {
        const { quantity } = req.body

        const newCart = await Cart.create( {quantity} ) 
        res.status(201).json(newCart)
    } catch (error) {
        console.error("Не удалось добавить клиента")
    }
}