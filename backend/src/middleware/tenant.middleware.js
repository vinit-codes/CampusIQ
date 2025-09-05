import { systemKey, tenantFromHeader } from './auth.js';

// Chain tenant-id checks:
// 1. First try X-Admin-Key for system routes
// 2. Then try X-College-Id header for pre-login
export const tenantMiddleware = [
  // Try system key first
  (req, res, next) => {
    const key = req.headers['x-admin-key'];
    if (key === process.env.JWT_SECRET) {
      // System routes bypass tenant checks
      return next();
    }
    next();
  },
  // Then try college header
  tenantFromHeader
];
