const { Router } = require("express");
const { PeopleRoutes } = require("./PeopleRoutes");

const routes = Router();

routes.use("/people", PeopleRoutes);

module.exports = { routes };
