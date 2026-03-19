import { Client } from '../models/clientModel.js'
import { Router } from "express"
import { getAllClients, createClient, getOneClients, deleteClient } from "../controlers/clientControler.js"

const router = Router();

router.get('', getAllClients)
router.get('/:id', getOneClients)
router.post('', createClient)
router.delete('/:id', deleteClient)

export default Router