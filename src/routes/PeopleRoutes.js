const { Router } = require("express");

const { PeopleController } = require("../controllers/PeopleController");

const route = Router();

route.get("/", PeopleController.show);

module.exports = { PeopleRoutes: route };
