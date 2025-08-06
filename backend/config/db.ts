import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env file here

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;
