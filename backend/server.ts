import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import './models/Student';
import './models/Teacher';
import './models/Admin';
import "./models/Fee";
import "./models/Assignment";
import "./models/Attendance";





dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
connectDB();

app.get('/', (_req, res) => {
  res.send('API running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
