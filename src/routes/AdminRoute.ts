import exprss, { Request, Response, NextFunction } from "express";
import { CreateVendor, GetVendors, GetVendorByID } from "../controllers";

const router = exprss.Router();

router.post("/vendor", CreateVendor);
router.get("/vendor", GetVendors);
router.get("/vendor/:id", GetVendorByID);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
   res.json({ message: "hello admin" });
});

export { router as AdminRoute };
