export default function tenantPlugin(schema, options) {
  // Ensure collegeId field exists
  if (!schema.path("collegeId")) {
    schema.add({
      collegeId: { type: String, required: true, index: true }
    });
  }

  // Guard on queries to enforce tenant scoping
  const guardedOps = [
    "find",
    "findOne",
    "updateOne",
    "deleteOne",
    "countDocuments"
  ];

  guardedOps.forEach((op) => {
    schema.pre(op, function () {
      if (!this.getQuery().collegeId) {
        throw new Error(`Tenant plugin: Missing collegeId in ${op} query`);
      }
    });
  });

  // On save, require collegeId
  schema.pre("save", function (next) {
    if (!this.collegeId) {
      return next(new Error("Tenant plugin: collegeId required on save"));
    }
    next();
  });
}
