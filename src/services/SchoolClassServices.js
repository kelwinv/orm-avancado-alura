const { School_class } = require("../models");

class SchoolClassServices {
  async findAll() {
    try {
      return await School_class.findAll();
    } catch (error) {
      return new Error(error);
    }
  }

  async findByID(id) {
    try {
      return await School_class.findOne({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }

  async create(data) {
    try {
      return await School_class.create(data);
    } catch (error) {
      return new Error(error);
    }
  }
  async update({ id, data }) {
    try {
      return await School_class.update(data, { where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
  async delete(id) {
    try {
      return await School_class.destroy({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = { SchoolClassServices: new SchoolClassServices() };
