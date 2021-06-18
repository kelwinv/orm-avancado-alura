const { PeopleService } = require("../services/PeopleService");

class PeopleController {
  async show(req, res) {
    const people = await PeopleService.findAll();

    return res.json(people);
  }
}

module.exports = { PeopleController: new PeopleController() };
