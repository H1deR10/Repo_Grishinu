import express from 'express' // создание экземпляра express из внешнего express
import 'dotenv/config' // import одного экземпляра - import {Sequelize} from 'sequelize'
import { sequelize } from './db.js'
import cors from "cors"
import router from "./routes/router.js" // import главного роутера
import errorHandler from './middle ware/error-landler.js'

// константы приложения(app) и порт
const app = express() 
const port = process.env.PORT || 3001

// middlewears
app.use(cors())
app.use(express.json())
app.use('/api', router) // отдельный маршрут api

app.use(errorHandler)


const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Раб http://localhost:${port}`)
        })
        await sequelize.authenticate(); // подключает сервер к Бд через sequelize(db.js)
        console.log("Connect saccesfull");
        await sequelize.sync({alter: true})
    } catch (error) {
        console.log("Unable to connect", error);
        console.log("Модели не синхрон")
    }
}

startServer()