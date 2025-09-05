import { createCollegeWithAdmin } from "../services/college.service.js";

export async function registerCollege(req, res) {
  try {
    const { name, code, adminName, adminEmail, adminPassword } = req.body;
    const result = await createCollegeWithAdmin({ name, code, adminName, adminEmail, adminPassword });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}
