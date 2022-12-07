var express = require('express');
var router = express.Router();
const clientesController = require("../controllers/clientes-controller");

/* GET users listing. */
router.get("/", clientesController.findAll);
//  {
//   res.send('respond with a resource');
// });
router.get("/:id", clientesController.findByPk);

router.get("/:nombre", clientesController.findByName);

module.exports = router;
