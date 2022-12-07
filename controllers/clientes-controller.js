const {clientes} = require("../models/index");

const clientesController = {};




clientesController.findAll = (req, res) => {
    clientes.findAll().then((data)=>{
        res.send(data);

});
};

clientesController.findByPk = (req,res)=>{
    const id= req.params.id;
    clientes.findByPk(id).then((data)=>{
        res.send(data);
    });
};

clientesController.findByName = (req, res) => {
    const nombre = req.params.nombre;
    console.log();
    clientes.findOne({ where: { nombre: nombre } }).then((data) => {
      res.send(data);
    });
  };


module.exports = clientesController;