const { Router } = require("express");
const router = Router();

const miseController = require("../controllers/mise.controller");

router.get("/", miseController.getTest);
router.get("/:stationName", miseController.getMise);

module.exports = router;
