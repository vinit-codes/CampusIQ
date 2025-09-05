import { login } from "../services/auth.service.js";

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const collegeId = req.tenantId;
    const result = await login({ email, password }, collegeId);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}
