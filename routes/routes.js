const { Router } = require("express");
const indexRouter = Router();
const { getDivisor } = require("../controllers/controllers");

indexRouter.get("/", getDivisor);

module.exports = indexRouter;
