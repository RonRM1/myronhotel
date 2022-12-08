const {Clientes} = require("../models.js");
const { Op } = require("sequelize");

const clientesController = {};


clientesController.getAll = async (req, res) => {
    try {
      const data = await Clientes.findAll({
       
      });
      res.json(data);
    } catch (error) {
      res.status(500).send({
        message: "Some error occurred while retrieving users.",
      });
    }
  };



clientesController.findByPk = (req,res)=>{
    const id= req.params.id;
    Clientes.findByPk(id).then((data)=>{
        res.send(data);
    });
};

// clientesController.findByName = (req, res) => {
//     const nombre = req.params.nombre;
//     console.log();
//     clientes.findOne({ where: { nombre: nombre } }).then((data) => {
//       res.send(data);
//     });
//   };


clientesController.getByName = async (req, res) => {
    const name = req.params.nombre;
  
    try {
      const data = await Clientes.findAll({
        where: { nombre: { [Op.like]: `%${name}%` } },
       
      });
  
      if (data.length > 0) {
        res.json(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with name=${name}`,
        });
      }
    } catch (error) {
      res.status(500).send({
        message: `Error retreiving user retrieving with name=${name}.`,
      });
    }
  };


module.exports = clientesController;