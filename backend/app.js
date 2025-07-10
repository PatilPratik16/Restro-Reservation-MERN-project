import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URI],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import reservationRouter from "./routes/reserve.route.js";

app.use("/api/v1/reserve", reservationRouter);

export { app };
