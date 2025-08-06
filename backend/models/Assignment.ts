import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    dueDate: { type: Date, required: true },
    assignedBy: { type: String, required: true }, // teacher ID
  },
  { timestamps: true }
);

export default mongoose.model("Assignment", assignmentSchema);
