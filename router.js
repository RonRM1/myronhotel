const router = require("express").Router();

const clientesRouter = require('./routes/clientes');
const usersRouter = require('./routes/clientes');
// const nombreRouter = require('./routes/clientes');

router.use('/', clientesRouter);
router.use('/users', usersRouter);
// router.use('/nombre', nombreRouter);

module.exports = router;



