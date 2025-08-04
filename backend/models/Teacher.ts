import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  subjects: [{ type: String }]
});

export default mongoose.model("Teacher", teacherSchema);
