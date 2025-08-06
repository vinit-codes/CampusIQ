import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    studentId: { type: String, required: true },
    date: { type: Date, required: true },
    status: {
      type: String,
      enum: ["Present", "Absent", "Late"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
