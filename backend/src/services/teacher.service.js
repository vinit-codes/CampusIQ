import Teacher from "../models/Teacher.js";
import { scoped } from "../utils/scoped.js";

export function teacherService(req) {
  const s = scoped(Teacher, req);

  return {
    list: () => s.find(),
    get: (id) => s.findOne({ _id: id }),
    create: async (data) => {
      const teacher = new Teacher({ ...data, collegeId: req.tenantId });
      await teacher.setPassword(data.password);
      return teacher.save();
    },
    update: (id, data) => s.updateOne({ _id: id }, { $set: data }),
    remove: (id) => s.deleteOne({ _id: id })
  };
}
