import { Order } from '../models/orderModel.js'
import { Router } from "express"
import { getAllOrders, createOrder } from "../controlers/orderController.js"

const router = Router();

router.get('', getAllOrders)
router.post('', createOrder)

export default Router