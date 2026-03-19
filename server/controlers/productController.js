import { Product } from '../models/productModel.js'

// http-get метод
export const getAllProducts = async (req, res) => {
    try {
        const getAllProducts = await Product.findAll() 
        res.status(200).json(getAllProducts)
    } catch (error) {
        console.error("Не удалось получить данные")
    }
}

// HTTP-post метод

export const createProduct = async (req, res) => {
    try {
        const { name, price } = req.body

        const newProduct = await Product.create( {name, price} ) 
        res.status(201).json(newProduct)
    } catch (error) {
        console.error("Не удалось добавить клиента")
    }
}