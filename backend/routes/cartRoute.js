import express from "express"
// import { addToCart,removeFromCart,getCart } from "../controller./cartController.js"
import authMiddleware from "../middleware/auth.js";
import { addToCart,removeFromCart,getCart } from "../controller/cartController.js"

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeFromCart)
cartRouter.post("/get",authMiddleware,getCart)

export default cartRouter;