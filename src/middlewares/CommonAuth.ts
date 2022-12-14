import { AuthPayload } from "../dto";
import { Request, NextFunction, Response } from "express";
import { ValidateSignature } from "../utility";

declare global {
   namespace Express {
      interface Request {
         user?: AuthPayload;
      }
   }
}

export const Authenticate = async (
   req: Request,
   res: Response,
   next: NextFunction
) => {
   // await console.log("sdfsfasfasfasfadsfasfas")
   const signature = await ValidateSignature(req);
   if (signature) {
      return next();
   } else {
      return res.json({ message: "User Not authorised" });
   }
};
