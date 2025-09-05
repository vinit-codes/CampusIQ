import { teacherService } from "../services/teacher.service.js";

export async function listTeachers(req, res) {
  try {
    const result = await teacherService(req).list();
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function createTeacher(req, res) {
  try {
    const result = await teacherService(req).create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
