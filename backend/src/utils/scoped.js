// Helper to auto-apply collegeId filter on queries
export function scoped(Model, req) {
  const tenantId = req.tenantId;
  if (!tenantId) throw new Error("No tenantId found in request");

  return {
    find: (filter = {}) => Model.find({ ...filter, collegeId: tenantId }),
    findOne: (filter = {}) => Model.findOne({ ...filter, collegeId: tenantId }),
    create: (data) => Model.create({ ...data, collegeId: tenantId }),
    updateOne: (filter, update) =>
      Model.updateOne({ ...filter, collegeId: tenantId }, update),
    deleteOne: (filter) =>
      Model.deleteOne({ ...filter, collegeId: tenantId }),
    count: (filter = {}) => Model.countDocuments({ ...filter, collegeId: tenantId }),
    aggregate: (pipeline = []) => [
      { $match: { collegeId: tenantId } },
      ...pipeline
    ]
  };
}
