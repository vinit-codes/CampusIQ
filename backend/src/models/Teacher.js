import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import tenantPlugin from "./plugins/tenant.plugin.js";

const TeacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    phone: { type: String },
    passwordHash: { type: String, required: true, select: false }
  },
  { timestamps: true }
);

TeacherSchema.index({ collegeId: 1, email: 1 }, { unique: true });

TeacherSchema.methods.setPassword = async function (password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

TeacherSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

TeacherSchema.plugin(tenantPlugin);

export default mongoose.model("Teacher", TeacherSchema);
