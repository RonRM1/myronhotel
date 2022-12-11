const router = require("express").Router();

const indexRouter = require("./routes/index");
const clientesRouter = require("./routes/clientes");
const reservasRouter = require("./routes/reservas");
const hotelesRouter = require("./routes/hoteles");

router.use("/", indexRouter);
router.use("/clientes", clientesRouter);
router.use("/reservas", reservasRouter);
router.use("/hoteles", hotelesRouter);

module.exports = router;
