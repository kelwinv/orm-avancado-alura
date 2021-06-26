const { Router } = require("express");

const {
  SchoolClassController
} = require("../controllers/SchoolClassController");

const route = Router();

route.get("/", SchoolClassController.show);
route.get("/:id", SchoolClassController.showOne);
route.post("/", SchoolClassController.create);
route.put("/:id", SchoolClassController.update);
route.delete("/:id", SchoolClassController.delete);

module.exports = { ClassesRoutes: route };
