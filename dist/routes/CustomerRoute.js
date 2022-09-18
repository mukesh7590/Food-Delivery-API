"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoute = void 0;
var express_1 = __importDefault(require("express"));
var controllers_1 = require("../controllers");
var middlewares_1 = require("../middlewares");
// import { Offer } from "../models/Offer";
var router = express_1.default.Router();
exports.CustomerRoute = router;
// uers part is  here
/* ------------------- Suignup / Create Customer --------------------- */
router.post("/signup", controllers_1.CustomerSignUp);
/* ------------------- Login --------------------- */
router.post("/login", controllers_1.CustomerLogin);
/* ------------------- Authentication Need here below--------------------- */
router.use(middlewares_1.Authenticate);
/* ------------------- Verify Customer Account --------------------- */
router.patch("/verify", controllers_1.CustomerVerify);
/* ------------------- OTP / request OTP --------------------- */
router.get("/otp", controllers_1.RequestOtp);
/* ------------------- Profile --------------------- */
router.get("/profile", controllers_1.GetCustomerProfile);
router.patch("/profile", controllers_1.EditCustomerProfile);
//Cart
router.post("/cart", controllers_1.AddToCart);
router.get("/cart", controllers_1.GetCart);
router.delete("/cart", controllers_1.DeleteCart);
//Apply Offers
router.get("/offer/verify/:id", controllers_1.VerifyOffer);
//Payment
router.post("/create-payment", controllers_1.CreatePayment);
//Order
router.post("/create-order", controllers_1.CreateOrder);
router.get("/orders", controllers_1.GetOrders);
router.get("/order/:id", controllers_1.GetOrderById);
//# sourceMappingURL=CustomerRoute.js.map