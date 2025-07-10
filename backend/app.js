import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight requests for all routes
app.options("*", cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import reservationRouter from "./routes/reserve.route.js";

app.use("/api/v1/reserve", reservationRouter);

export { app };
