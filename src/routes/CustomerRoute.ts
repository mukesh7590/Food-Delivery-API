import express, { Request, Response, NextFunction } from "express";
import {
   AddToCart,
   CreateOrder,
   CreatePayment,
   CustomerLogin,
   CustomerSignUp,
   CustomerVerify,
   DeleteCart,
   EditCustomerProfile,
   GetCart,
   GetCustomerProfile,
   GetOrderById,
   GetOrders,
   RequestOtp,
   VerifyOffer,
} from "../controllers";
import { Authenticate } from "../middlewares";

const router = express.Router();
router.get("/", (req: Request, res: Response, next: NextFunction) => {
   res.json({ message: "hello customer" });
});

/* ------------------- Suignup / Login Customer --------------------- */
router.post("/signup", CustomerSignUp);
router.post("/login", CustomerLogin);


/* ------------------- Authentication Need here below--------------------- */
router.use(Authenticate);

/* ------------------- Verify Customer Account --------------------- */
router.patch("/verify", CustomerVerify);

/* ------------------- OTP / request OTP --------------------- */
router.get("/otp", RequestOtp);

/* ------------------- Profile --------------------- */
router.get("/profile", GetCustomerProfile);
router.patch("/profile", EditCustomerProfile);


//Cart
router.post("/cart", AddToCart);
router.get("/cart", GetCart);
router.delete("/cart", DeleteCart);

//Order
router.post("/create-order", CreateOrder);
router.get("/orders", GetOrders);
router.get("/order/:id", GetOrderById);


//Apply Offers
router.get("/offer/verify/:id", VerifyOffer);

//Payment
router.post("/create-payment", CreatePayment);

export { router as CustomerRoute };
