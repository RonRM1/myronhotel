//end points
var express = require("express");
var router = express.Router();

const hotelesController = require("../controllers/hoteles-controller");

/* GET hoteles listing. */
router.get("/", hotelesController.getAll);

/* GET hotel by id. */
router.get("/:id", hotelesController.getById);

module.exports = router;
