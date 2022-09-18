import mongoose from "mongoose";

import { MONGO_URI } from "../config";

export default async () => {
   try {
      await mongoose.connect(MONGO_URI);
      console.log("Database connection Established !");
   } catch (error) {
      console.log(error);
   }
};

// mongoose
//    .connect(MONGO_URI)
//    .then((result) => {
//       console.log("Database connection Established !");
//    })
//    .catch((err) => console.log("ERROR => " + err));
