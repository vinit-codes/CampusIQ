import express from "express";
import { listTeachers, createTeacher } from "../controllers/teacher.controller.js";
import { tenantMiddleware } from "../middleware/tenant.middleware.js";

const router = express.Router();
router.use(tenantMiddleware);

router.get("/", listTeachers);
router.post("/", createTeacher);

export default router;
