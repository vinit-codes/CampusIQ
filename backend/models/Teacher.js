const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  subjects: [{ type: String }]
});

module.exports = mongoose.model("Teacher", teacherSchema);
