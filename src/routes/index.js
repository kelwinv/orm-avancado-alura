const { Router } = require("express");
const { PeopleRoutes } = require("./PeopleRoutes");
const { LevelsRoutes } = require("./LevelsRoutes");
const { ClassesRoutes } = require("./SchoolClassRoutes");

const routes = Router();

routes.use("/people", PeopleRoutes);
routes.use("/levels", LevelsRoutes);
routes.use("/classes", ClassesRoutes);

module.exports = { routes };
