import { Сlient } from '../models/clientModel.js'
import { Router } from "express"
import { getAllClients, createClient } from "../controlers/clientControler.js"

const router = Router();

router.get('', getAllClients)
router.post('', createClient)

export default Router