import express, { Application } from "express";
// import '../images'
import path from "path";

import {
   AdminRoute,
   VendorRoute,
   ShoppingRoute,
   CustomerRoute,
} from "../routes";

export default async (app: Application) => {
   app.use(express.json());
   app.use(express.urlencoded({ extended: true }));

   const imagePath = path.join(__dirname, "../images");
   
   app.use("/images", express.static(imagePath));
   
   console.log(imagePath);

   app.use("/admin", AdminRoute);
   app.use("/vendor", VendorRoute);
   app.use("/customer", CustomerRoute);
   app.use(ShoppingRoute);

   return app;
};
