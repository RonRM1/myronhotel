const { Reservas, Clientes, Hoteles } = require("../models.js");
const { Op } = require("sequelize"); ///srtstststg

const reservasController = {};

reservasController.getAll = async (req, res) => {

  try {
    const data = await Reservas.findAll({
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ]
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while retrieving users.",
    });
  }
};

reservasController.getById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Reservas.findByPk(id, {
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });

    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with id=${id}.`,
    });
  }
};

//////obtener nombre
// reservasController.getByName = async (req, res) => {
//   const name = req.params.nombre;

//   try {
//     const data = await Clientes.findAll({
//       where: { nombre: { [Op.like]: `%${name}%` } },
//       include: [
//         { model: Hoteles, as: "id_hotel_hotele" },
//         { model: Clientes, as: "id_cliente_cliente" },
//       ],
//     });

//     if (data.length > 0) {
//       res.json(data);
//     } else {
//       res.status(404).send({
//         message: `Cannot find user with name=${name}`,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       message: `Error retreiving user retrieving with name=${name}.`,
//     });
//   }
// };

module.exports = reservasController;

// reservasController.findAll = (req, res) => {
//     reservas.findAll().then((data)=>{
//         res.send(data);

// });
// };

// const { reservas, clientes} = require("../models.js");

// const reservasController = {};

// reservasController.getAll = async (req, res) => {
//     try {
//         const data = await reservas.findAll(
//             {

//                 include:[{model:clientes, as:"id_cliente_cliente" }],

//             });
//             res.json(data);
//     } catch (error) {
//         res.status(500).send({
//             message: "Some error occurred while retrieving users.",

//     });
// }
// };
