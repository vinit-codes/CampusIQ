import { studentService } from "../services/student.service.js";

export async function listStudents(req, res) {
  try {
    const result = await studentService(req).list();
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function createStudent(req, res) {
  try {
    const result = await studentService(req).create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
