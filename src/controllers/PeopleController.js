const { PeopleService } = require("../services/PeopleService");

class PeopleController {
  async show(req, res) {
    const people = await PeopleService.findAll();

    return res.json(people);
  }
  async showOne(req, res) {
    const { id } = req.params;

    const person = await PeopleService.findByID(id);

    return res.json(person);
  }

  async create(req, res) {
    const { name, active, email, role } = req.body;
    const data = { name, active, email, role };

    const person = await PeopleService.create(data);

    return res.json(person);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, active, email, role } = req.body;
    const data = { name, active, email, role };

    const person = await PeopleService.update({ id, data });

    return res.json(person);
  }

  async delete(req, res) {
    const { id } = req.params;

    await PeopleService.delete(id);

    return res.status(204).end();
  }
}

module.exports = { PeopleController: new PeopleController() };
