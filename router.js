const router = require("express").Router();

const clientesRouter = require('./routes/clientes');
const clienteRouter = require('./routes/clientes');
const clienteNameRouter = require('./routes/clientes');

router.use('/', clientesRouter);//clientes
router.use('/id', clienteRouter);//id cliente
router.use('/name/nombre', clienteNameRouter);//nombre







const reservasRouter = require("./routes/reservas");
const reservaRouter = require("./routes/reservas");

router.use("/reservas/reservas", reservasRouter);//reservas
router.use("/reserva/id", reservaRouter);//id reserva




module.exports = router;



