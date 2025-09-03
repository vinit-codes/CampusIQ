const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
require('./models/Student');
require('./models/Teacher');
require('./models/Admin');

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
