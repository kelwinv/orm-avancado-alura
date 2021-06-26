const { Enrollments } = require("../models");

class EnrollmentsServices {
  async findAll({ student_id }) {
    try {
      return await Enrollments.findAll({ where: { student_id } });
    } catch (error) {
      return new Error(error);
    }
  }

  async findByID({ student_id, id }) {
    try {
      return await Enrollments.findOne({ where: { student_id, id } });
    } catch (error) {
      return new Error(error);
    }
  }

  async create(data) {
    try {
      return await Enrollments.create(data);
    } catch (error) {
      return new Error(error);
    }
  }
  async update({ id, student_id, data }) {
    try {
      return await Enrollments.update(data, { where: { id, student_id } });
    } catch (error) {
      return new Error(error);
    }
  }
  async delete({ id, student_id }) {
    try {
      return await Enrollments.destroy({ where: { id, student_id } });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = { EnrollmentsServices: new EnrollmentsServices() };
