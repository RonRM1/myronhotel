//end points
var express = require("express");
var router = express.Router();

const reservasController = require("../controllers/reservas-controller");

/* GET clientes listing. */
// router.get("/", reservasController.findAll);
router.get("/", reservasController.getAll);
// router.get("/reservas/", reservasController.getAll);

// /* GET cliente by id. */
router.get("/:id", reservasController.getById);

// /* GET users by name. */
// router.get("/name/:nombre", reservasController.getByName);

module.exports = router;
