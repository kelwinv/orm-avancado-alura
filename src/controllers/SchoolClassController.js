const { SchoolClassServices } = require("../services/SchoolClassServices");

class SchoolClassController {
  async show(req, res) {
    const Classes = await SchoolClassServices.findAll();

    return res.json(Classes);
  }

  async showOne(req, res) {
    const { id } = req.params;

    const schoolClass = await SchoolClassServices.findByID(id);

    return res.json(schoolClass);
  }

  async create(req, res) {
    const { start_date, level_id, docente_id } = req.body;
    const data = { start_date, level_id, docente_id };

    const schoolClass = await SchoolClassServices.create(data);

    return res.json(schoolClass);
  }

  async update(req, res) {
    const { id } = req.params;
    const { start_date, level_id, docente_id } = req.body;
    const data = { start_date, level_id, docente_id };

    const schoolClass = await SchoolClassServices.update({ id, data });

    return res.json(schoolClass);
  }

  async delete(req, res) {
    const { id } = req.params;

    await SchoolClassServices.delete(id);

    return res.status(204).end();
  }
}

module.exports = { SchoolClassController: new SchoolClassController() };
