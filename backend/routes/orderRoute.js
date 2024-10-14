import express from "express";
import authMiddleware from "../middleware/auth.js";
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus} from "../controller/orderController.js";

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userOrder",authMiddleware,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;