import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { notFound, onError } from './middleware/errors.js';
import { authRequired, tenantFromHeader } from "./middleware/auth.js";


const app = express();

app.get("/test-tenant", tenantFromHeader, (req, res) => {
  res.json({ tenantId: req.tenantId });
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