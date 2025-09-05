import College from "../models/College.js";
import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export async function createCollegeWithAdmin({ name, code, adminName, adminEmail, adminPassword }) {
  // 1. Create college
  const college = await College.create({ name, code });

  // 2. Create admin tied to this college
  const admin = new Admin({
    name: adminName,
    email: adminEmail,
    collegeId: college._id.toString()
  });
  await admin.setPassword(adminPassword);
  await admin.save();

  // 3. Generate token for admin
  const token = jwt.sign(
    { sub: admin._id.toString(), role: "ADMIN", collegeId: college._id.toString() },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
  );

  return { college, admin, token };
}
