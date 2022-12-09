const router = require("express").Router();

// const clientesRouter = require('./routes/clientes');
// const clienteRouter = require('./routes/clientes');
// const clienteNameRouter = require('./routes/clientes');

// router.use('/', clientesRouter);//clientes
// router.use('/id', clienteRouter);//id cliente
// router.use('/name/nombre', clienteNameRouter);//nombre







// const reservasRouter = require("./routes/reservas");
// const reservaRouter = require("./routes/reservas");

// router.use("/reservas/reservas", reservasRouter);//reservas
// router.use("/reserva/id", reservaRouter);//id reserva

const indexRouter = require('./routes/index');
const clienteRouter = require('./routes/clientes');
const reservasRouter = require('./routes/reservas');



router.use('/', indexRouter);//clientes
router.use('/clientes', clienteRouter);//id cliente
router.use('/reservas', clienteRouter);//id cliente
router.use('/hoteles', reservasRouter);//id cliente




module.exports = router;



