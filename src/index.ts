import express from "express";
import App from "./services/Express";
import dbConnection from "./services/Database";
import { PORT } from "./config";

const StartServer = async () => {
   const app = express();

   await dbConnection();

   await App(app);

   app.listen(PORT, () => {
      console.log(`Listening to port on Heroku Serever ${PORT}`);
      // console.clear();
   });
};

StartServer();
