const { Levels } = require("../models");

class LevelsService {
  async findAll() {
    try {
      return await Levels.findAll();
    } catch (error) {
      return new Error(error);
    }
  }

  async findByID(id) {
    try {
      return await Levels.findOne({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }

  async create(desc_level) {
    try {
      return await Levels.create({ desc_level });
    } catch (error) {
      return new Error(error);
    }
  }
  async update({ id, desc_level }) {
    try {
      return await Levels.update({ desc_level }, { where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
  async delete(id) {
    try {
      return await Levels.destroy({ where: { id } });
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = { LevelsService: new LevelsService() };
