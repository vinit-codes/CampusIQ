import Admin from "../models/Admin.js";
import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";
import jwt from "jsonwebtoken";

export async function login({ email, password }, collegeId) {
  // Look in Admin, then Teacher, then Student (per tenant)
  const collections = [
    { model: Admin, role: "ADMIN" },
    { model: Teacher, role: "TEACHER" },
    { model: Student, role: "STUDENT" }
  ];

  for (const { model, role } of collections) {
    let user = await model.findOne({ email, collegeId }).select("+passwordHash");
    if (user && (await user.verifyPassword(password))) {
      // Generate JWT
      const token = jwt.sign(
        { sub: user._id.toString(), role, collegeId },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
      );
      return { token, user: { id: user._id, name: user.name, role, collegeId } };
    }
  }

  throw new Error("Invalid email or password");
}
