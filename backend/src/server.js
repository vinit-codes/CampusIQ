import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { notFound, onError } from './middleware/errors.js';
import { authRequired, tenantFromHeader } from "./middleware/auth.js";
import Admin from "./models/Admin.js";
import { createCollegeWithAdmin } from "./services/college.service.js";

const app = express();
//testing
app.get("/test-tenant", tenantFromHeader, (req, res) => {
  res.json({ tenantId: req.tenantId });
});

app.post("/test-create-admin", async (req, res) => {
  try {
    const admin = new Admin({
      name: "Test Admin",
      email: "test@iwe.edu",
      collegeId: "abc123"
    });
    await admin.setPassword("pass123");
    await admin.save();
    res.json({ id: admin._id, email: admin.email, collegeId: admin.collegeId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/test-create-college", async (req, res) => {
  try {
    const result = await createCollegeWithAdmin({
      name: "Indian Web Engg College",
      code: "IWE",
      adminName: "Vineeth",
      adminEmail: "vineeth@iwe.edu",
      adminPassword: "admin123"
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health check route
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Routes
import collegeRoutes from "./routes/college.routes.js";
import authRoutes from "./routes/auth.routes.js";
import teacherRoutes from "./routes/teacher.routes.js";
import studentRoutes from "./routes/student.routes.js";

app.use("/api/colleges", collegeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/students", studentRoutes);


// Error handling
app.use(notFound);
app.use(onError);

export default app;