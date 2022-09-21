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
} from "../controllers";

import multer from "multer";
import { VendorLoginInput } from "../dto";
import { Authenticate } from "../middlewares";
import { Vendor } from "../models";

const router = exprss.Router();

const imageStorage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "images");
   },
   filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + "_" + file.originalname);
   },
});

const images = multer({ storage: imageStorage }).array("images", 10);

router.post("/login", VendorLogin);

router.use(Authenticate); // this always execute before the 3 lines given below

router.get("/profile", GetVendorProfile);
router.patch("/profile", UpdateVendorProfile);
router.patch("/coverimage", images, UpdateVendorCoverImage);
router.patch("/service", UpdateVendorService);

router.post("/food", images, AddFood);
router.get("/foods", GetFoods);

// Orders section

router.get("/orders", GetCurrentOrders);
router.put("/order/:id/process", ProcessOrder);
router.get("/order/:id", GetOrderDetails);

// router.get("/", (req: Request, res: Response, next: NextFunction) => {
//    res.json({ message: "hello Vandor" });
// });

export { router as VendorRoute };
