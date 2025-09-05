import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { notFound, onError } from './middleware/errors.js';
import { authRequired, tenantFromHeader } from "./middleware/auth.js";
import Admin from "./models/Admin.js";

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


// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Health check route
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Route placeholders
app.use('/api/auth', (req, res) => res.status(501).json({ message: 'Not implemented' }));
app.use('/api/students', (req, res) => res.status(501).json({ message: 'Not implemented' }));
app.use('/api/teachers', (req, res) => res.status(501).json({ message: 'Not implemented' }));

// Error handling
app.use(notFound);
app.use(onError);

export default app;