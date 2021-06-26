const { EnrollmentsServices } = require("../services/EnrollmentsServices");

class EnrollmentsController {
  async show(req, res) {
    const { person } = req;

    const enrollments = await EnrollmentsServices.findAll({
      student_id: person.id,
    });

    return res.json({ person, enrollments });
  }

  async showByID(req, res) {
    const { person } = req;
    const { id } = req.params;

    const enrollment = await EnrollmentsServices.findByID({
      id,
      student_id: person.id,
    });

    return res.json(enrollment);
  }

  async create(req, res) {
    const { person } = req;
    const { status, class_id } = req.body;

    const data = { status, class_id, student_id: person.id };

    const enrollments = await EnrollmentsServices.create(data);

    return res.json(enrollments);
  }

  async update(req, res) {
    const { person } = req;
    const { id } = req.params;
    const { status, class_id } = req.body;

    const data = { status, class_id };

    const enrollments = await EnrollmentsServices.update({
      data,
      student_id: person.id,
      id,
    });

    return res.json(enrollments);
  }

  async delete(req, res) {
    const { person } = req;
    const { id } = req.params;

    await EnrollmentsServices.delete({
      student_id: person.id,
      id,
    });

    return res.status(204).end();
  }
}

module.exports = { EnrollmentsController: new EnrollmentsController() };
