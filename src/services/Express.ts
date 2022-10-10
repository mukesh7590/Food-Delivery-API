import express, { Application } from "express";
// import '../images'
import path from "path";

import {
   AdminRoute,
   VendorRoute,
   ShoppingRoute,
   CustomerRoute,
   DeliveryRoute,
} from "../routes";

export default async (app: Application) => {
   app.use(express.json());

   app.use(express.urlencoded({ extended: true }));

   app.use("/admin", AdminRoute);
   app.use("/vendor", VendorRoute);
   app.use("/customer", CustomerRoute);
   app.use("/delivery", DeliveryRoute);

   app.use(ShoppingRoute);

   return app;
};
