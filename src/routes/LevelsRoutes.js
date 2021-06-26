const { Router } = require("express");

const { LevelsControllers } = require("../controllers/LevelsControllers");

const route = Router();

route.get("/", LevelsControllers.show);
route.get("/:id", LevelsControllers.showOne);
route.post("/", LevelsControllers.create);
route.put("/:id", LevelsControllers.update);
route.delete("/:id", LevelsControllers.delete);

module.exports = { LevelsRoutes: route };
