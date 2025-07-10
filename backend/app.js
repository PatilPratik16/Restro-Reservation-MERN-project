import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
dotenv.config({
  path: "./.env",
});

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173", // Add common Vite development port
  "https://royaldine.netlify.app"
  // Add any other origins your frontend might use
];
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log(`Origin ${origin} not allowed by CORS`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Cookie", "Set-Cookie", "Origin", "Accept"],
    exposedHeaders: ["Set-Cookie"],
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.use(bodyParser.json());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import reservationRouter from "./routes/reserve.route.js";

app.use("/api/v1/reserve", reservationRouter);

export { app };

