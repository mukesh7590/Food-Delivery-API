import exprss, { Request, Response, NextFunction } from "express";
import {
   VendorLogin,
   GetVendorProfile,
   UpdateVendorProfile,
   UpdateVendorService,
   AddFood,
   GetFoods,
   UpdateVendorCoverImage,
   GetCurrentOrders,
   GetOrderDetails,
   ProcessOrder,
   GetOffers,
   AddOffer,
   EditOffer,
} from "../controllers";
import path from "path";

import multer from "multer";
import { VendorLoginInput } from "../dto";
import { Authenticate } from "../middlewares";
import { Vendor } from "../models";

const router = exprss.Router();

const imageStorage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../images/"));
   },
   filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + "_" + file.originalname);
   },
});

const images = multer({ storage: imageStorage }).array("images", 3);

// Login route by Admin

router.post("/login", VendorLogin);

router.use(Authenticate); // this always execute before the 3 lines given below

router.get("/profile", GetVendorProfile);
router.patch("/profile", UpdateVendorProfile);

router.post("/food", images, AddFood);
router.get("/foods", GetFoods);

router.patch("/coverimage", images, UpdateVendorCoverImage);
router.patch("/service", UpdateVendorService);

// Orders section
router.get("/orders", GetCurrentOrders);
router.put("/order/:id/process", ProcessOrder);
router.get("/order/:id", GetOrderDetails);

//Offers Section
router.get("/offers", GetOffers);
router.post("/offer", AddOffer);
router.put("/offer/:id", EditOffer);

export { router as VendorRoute };
