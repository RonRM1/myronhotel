//end points
var express = require('express');
var router = express.Router();

const clientesController = require("../controllers/clientes-controller");

/* GET clientes listing. */
router.get("/", clientesController.getAll);

/* GET cliente by id. */
router.get("/:id", clientesController.findByPk);

/* GET users by name. */
router.get("/name/:nombre", clientesController.getByName);

module.exports = router;
