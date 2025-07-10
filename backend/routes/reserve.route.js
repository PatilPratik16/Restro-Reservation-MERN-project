import express from "express";
import { reserve } from "../controllers/reserve.controller.js";

const router = express.Router();

router.route("/done").post(reserve);

export default router;
