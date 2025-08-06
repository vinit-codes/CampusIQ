import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    studentId: { type: String, required: true },
    amount: { type: Number, required: true },
    dueDate: { type: Date, required: true },
    isPaid: { type: Boolean, default: false },
    paidDate: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model("Fee", feeSchema);
