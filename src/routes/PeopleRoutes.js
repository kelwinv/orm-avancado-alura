const { Router } = require("express");

const { PeopleController } = require("../controllers/PeopleController");

const route = Router();

route.get("/", PeopleController.show);
route.get("/:id", PeopleController.showOne);
route.post("/", PeopleController.create);
route.put("/:id", PeopleController.update);
route.delete("/:id", PeopleController.delete);

module.exports = { PeopleRoutes: route };
