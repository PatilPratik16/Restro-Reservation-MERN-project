import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import { app } from "./app.js";
import connectDB from "./db/connect-db.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Database connected Successfully : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Database connection failed : ${error}`);
  });
