const { Router } = require("express");

const { EnrollmentsController } = require("../controllers/EnrollmentsController");

const route = Router();

route.get("/", EnrollmentsController.show);
route.get("/:id", EnrollmentsController.showByID);
route.post("/", EnrollmentsController.create);
route.put("/:id", EnrollmentsController.update);
route.delete("/:id", EnrollmentsController.delete);


module.exports = { EnrollmentsRoutes: route };
