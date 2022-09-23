import exprss, { Request, Response, NextFunction } from "express";
import {
   CreateVendor,
   GetVendors,
   GetVendorByID,
   GetTransactions,
   VerifyDeliveryUser,
   GetTransactionById,
   GetDeliveryUsers,
} from "../controllers";

const router = exprss.Router();

router.post("/vendor", CreateVendor);
router.get("/vendor", GetVendors);
router.get("/vendor/:id", GetVendorByID);

router.get("/transactions", GetTransactions);

router.get('/transaction/:id', GetTransactionById)

router.put("/delivery/verify", VerifyDeliveryUser);
router.get('/delivery/users', GetDeliveryUsers);

export { router as AdminRoute };
