import jwt from "jsonwebtoken";

export function authRequired(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload; // { sub, role, collegeId }
    req.tenantId = payload.collegeId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

export function requireRole(role) {
  return (req, res, next) => {
    if (req.user?.role !== role) {
      return res.status(403).json({ error: "Forbidden: Insufficient role" });
    }
    next();
  };
}

// Allow bootstrap with admin key
export function systemKey(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (key !== process.env.JWT_SECRET) {
    return res.status(403).json({ error: "Forbidden: Invalid system key" });
  }
  next();
}

// Pre-login: attach tenantId from header
export function tenantFromHeader(req, res, next) {
  const collegeId = req.headers["x-college-id"];
  if (!collegeId) {
    return res.status(400).json({ error: "X-College-Id header required" });
  }
  req.tenantId = collegeId;
  next();
}
