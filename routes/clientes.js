//end points
var express = require("express");
var router = express.Router();

const clientesController = require("../controllers/clientes-controller");

/* GET clientes listing. */
router.get("/", clientesController.getAll);

/* GET cliente by id. */
router.get("/:id", clientesController.getById);

/* GET cliente by name. */
router.get("/name/:nombre", clientesController.getByName);

//DNI
router.get("/dni/:DNI", clientesController.getByDNI);

//telefono
router.get("/phone/:telefono", clientesController.getByPhone);

//email
router.get("/email/:Email", clientesController.getByEmail);

// buscar por id cliente toda sus reservas
router.get("/:id/reservas", clientesController.getReservas);

//busca id clientes su historial de hoteles
router.get("/:id/reservas/:hoteles", clientesController.getHoteles);

module.exports = router;
