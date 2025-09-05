import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import tenantPlugin from "./plugins/tenant.plugin.js";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    year: { type: Number },
    department: { type: String },
    passwordHash: { type: String, required: true, select: false }
  },
  { timestamps: true }
);

StudentSchema.index({ collegeId: 1, email: 1 }, { unique: true });

StudentSchema.methods.setPassword = async function (password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

StudentSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

StudentSchema.plugin(tenantPlugin);

export default mongoose.model("Student", StudentSchema);
