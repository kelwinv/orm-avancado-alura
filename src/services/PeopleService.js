const { People } = require("../models");

class PeopleService {
  async findAll() {
    try {
      return await People.findAll();
    } catch (error) {
      return new Error(error);
    }
  }
}

module.exports = { PeopleService: new PeopleService() };
