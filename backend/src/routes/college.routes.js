import express from "express";
import { registerCollege } from "../controllers/college.controller.js";

const router = express.Router();
router.post("/register", registerCollege);

export default router;
