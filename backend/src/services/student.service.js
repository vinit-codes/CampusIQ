import Student from "../models/Student.js";
import { scoped } from "../utils/scoped.js";

export function studentService(req) {
  const s = scoped(Student, req);

  return {
    list: () => s.find(),
    get: (id) => s.findOne({ _id: id }),
    create: async (data) => {
      const student = new Student({ ...data, collegeId: req.tenantId });
      await student.setPassword(data.password);
      return student.save();
    },
    update: (id, data) => s.updateOne({ _id: id }, { $set: data }),
    remove: (id) => s.deleteOne({ _id: id })
  };
}
