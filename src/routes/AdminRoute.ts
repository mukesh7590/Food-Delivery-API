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

// vendor create, gets all vendors, get vendor by ID
router.post("/vendor", CreateVendor);
router.get("/vendors", GetVendors);
router.get("/vendor/:id", GetVendorByID);


// transaction section operations by Admin
router.get("/transactions", GetTransactions);

router.get('/transaction/:id', GetTransactionById)

router.put("/delivery/verify", VerifyDeliveryUser);
router.get('/delivery/users', GetDeliveryUsers);

export { router as AdminRoute };
