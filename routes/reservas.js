//end points
var express = require("express");
var router = express.Router();

const reservasController = require("../controllers/reservas-controller");

/* GET reservas listing. */
router.get("/", reservasController.getAll);

// /* GET reserva by id. */
router.get("/:id", reservasController.getById);

//fecha de entrada
router.get("/checkin/:fecha_entrada", reservasController.getCheckIn);

//fecha de salida
router.get("/checkout/:fecha_salida", reservasController.getCheckOut);

module.exports = router;
