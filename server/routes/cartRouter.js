import { Сart } from '../models/cartModel.js'
import { Router } from "express"
import { getAllCarts, createCart } from "../controlers/cartController.js"

const router = Router();

router.get('', getAllCarts)
router.post('', createCart)

export default Router