import express from 'express'
import 'dotenv/config'
import { sequelize } from './db.js'
import cors from "cors"
import router from "./routes/router.js" 
import errorHandler from './middle ware/error-landler.js'

const app = express() 
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/api', router) 

app.use(errorHandler)


const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Раб http://localhost:${port}`)
        })
        await sequelize.authenticate(); 
        console.log("Connect saccesfull");
        await sequelize.sync({alter: true})
    } catch (error) {
        console.log("Unable to connect", error);
        console.log("Модели не синхрон")
    }
}

startServer()