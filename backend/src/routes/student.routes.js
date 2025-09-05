import express from "express";
import { listStudents, createStudent } from "../controllers/student.controller.js";
import { tenantMiddleware } from "../middleware/tenant.middleware.js";

const router = express.Router();
router.use(tenantMiddleware);

router.get("/", listStudents);
router.post("/", createStudent);

export default router;
