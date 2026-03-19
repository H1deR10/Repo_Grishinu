import { Client } from '../models/clientModel.js'

// http-get метод
export const getAllClients = async (req, res) => {
    try {
        const getAllClients = await Client.findAll() // SELECT * from CLIENTS
        res.status(200).json(getAllClients)
    } catch (err) {
        next(err)
    }
}

// HTTP-post метод

export const createClient = async (req, res) => {
    try {
        const { name, email, rating, bday } = req.body

        const newClient = await Client.create( {name, email, rating, bday} )
        res.status(201).json(newClient)
    } catch (error) {
        console.error("Не удалось добавить клиента")
        res.status(500).json({
            success: false,
            message: "Ошибка добавления клиенты"
        })
    }
}

// GET-ONE end-point

export const getOneClients = async (req, res, next) => {
    try {
        const { id } = req.params
        const oneclient = await Client.findOne({
            where: { id }
        })
        if (!oneclient) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(oneclient)
    } catch (err) {
        next(err)
    }
}

// HTTP-DELETE

export const deleteClient = async (req, res, next) => {
    try {
        const { id } = req.params
        const deleteClient = await Client.destroy({
            where: { id }
        })
        if (!deleteClient) return res.status(404).json({message: "Нет такого id"})
        res.status(200).json(deleteClient)
    } catch (err) {
        next(err)
    }
}

// HTTP-UPDATE

