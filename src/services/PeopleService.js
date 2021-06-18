const { People } = require("../models");

class PeopleService {
  async findAll() {
    try {
      return await People.findAll();
    } catch (error) {
      return new Error(error);
    }
  }

  async findByID(id) {
    try {
      return await People.findOne({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }

  async create(data) {
    try {
      return await People.create(data);
    } catch (error) {
      return new Error(error);
    }
  }
  async update({ id, data }) {
    try {
      return await People.update(data, { where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
  async delete(id) {
    try {
      return await People.destroy({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = { PeopleService: new PeopleService() };
