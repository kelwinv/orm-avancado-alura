const { LevelsService } = require("../services/LevelsService");

class LevelsControllers {
  async show(req, res) {
    const Levels = await LevelsService.findAll();

    return res.json(Levels);
  }

  async showOne(req, res) {
    const { id } = req.params;
    const level = await LevelsService.findByID(id);

    return res.json(level);
  }

  async create(req, res) {
    const { desc_level } = req.body;
    const level = await LevelsService.create(desc_level);

    return res.json(level);
  }

  async update(req, res) {
    const { id } = req.params;
    const { desc_level } = req.body;

    const level = await LevelsService.update({ id, desc_level });

    return res.json(level);
  }

  async delete(req, res) {
    const { id } = req.params;

    await LevelsService.delete(id);

    return res.status(204).end();
  }
}

module.exports = { LevelsControllers: new LevelsControllers() };
