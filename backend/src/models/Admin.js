import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import tenantPlugin from "./plugins/tenant.plugin.js";

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true, select: false }
  },
  { timestamps: true }
);

// Per-tenant uniqueness of email
AdminSchema.index({ collegeId: 1, email: 1 }, { unique: true });

// Password helpers
AdminSchema.methods.setPassword = async function (password) {
  this.passwordHash = await bcrypt.hash(password, 10);
};

AdminSchema.methods.verifyPassword = async function (password) {
  return bcrypt.compare(password, this.passwordHash);
};

AdminSchema.plugin(tenantPlugin);

export default mongoose.model("Admin", AdminSchema);
