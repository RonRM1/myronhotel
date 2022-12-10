const { Clientes, Reservas, Hoteles } = require("../models.js");
const { Op } = require("sequelize");

const clientesController = {};
//todos los clientes
clientesController.getAll = async (req, res) => {
  try {
    const data = await Clientes.findAll({});
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while retrieving users.",
    });
  }
};
//id de cliente
clientesController.findByPk = (req, res) => {
  const id = req.params.id;
  Clientes.findByPk(id).then((data) => {
    res.send(data);
  });
};

//nombre de cliente
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

//DNI
clientesController.getByDNI = async (req, res) => {
  const number = req.params.DNI;

  try {
    const data = await Clientes.findAll({
      where: { DNI: { [Op.eq]: number } },
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with DNI=${number}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with DNI=${number}.`,
    });
  }
};

//telefono
clientesController.getByPhone = async (req, res) => {
  const phone = req.params.telefono;

  try {
    const data = await Clientes.findAll({
      where: { telefono: { [Op.eq]: phone } },
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with phone=${phone}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with phone=${phone}.`,
    });
  }
};


//Email
clientesController.getByEmail = async (req, res) => {
  const email = req.params.Email;

  try {
    const data = await Clientes.findAll({
      where: { Email: { [Op.like]: `%${email}%` } },
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with email=${email}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with email=${email}.`,
    });
  }
};

//reserva de cada cliente
clientesController.getReservas = async (req, res) => {
  const id = req.params.id;

  try {
    console.log();
    const data = await Reservas.findAll({
      include: [
        // { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
      where: { id_cliente: { [Op.eq]: id } },
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with id=${id}.`,
    });
  }
};
//hotel donde se aloja el cliente
clientesController.getHoteles = async (req, res) => {
  const id = req.params.id;

  try {
    console.log();
    const data = await Reservas.findAll({
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        // { model: Clientes, as: "id_cliente_cliente" },
      ],
      where: { id_cliente: { [Op.eq]: id } },
    });
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with id=${id}.`,
    });
  }
};

module.exports = clientesController;
