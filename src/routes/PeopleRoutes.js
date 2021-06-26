const { Router } = require("express");

const { PeopleController } = require("../controllers/PeopleController");
const { EnrollmentsRoutes } = require("./EnrollmentsRoutes");

const route = Router();

route.get("/", PeopleController.show);
route.get("/:id", PeopleController.showOne);
route.post("/", PeopleController.create);
route.put("/:id", PeopleController.update);
route.delete("/:id", PeopleController.delete);

route.use(
  "/:person_id/enrollments",
  PeopleController.verifyPerson,
  EnrollmentsRoutes
);

module.exports = { PeopleRoutes: route };
