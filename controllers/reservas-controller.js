const { Reservas, Clientes, Hoteles } = require("../models.js");
const { Op } = require("sequelize");

const reservasController = {};

reservasController.getAll = async (req, res) => {
  try {
    const data = await Reservas.findAll({
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
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

//fecha de entrada
reservasController.getCheckIn = async (req, res) => {
  const date = req.params.fecha_entrada;

  try {
    const data = await Reservas.findAll({
      where: { fecha_entrada: { [Op.eq]: date } },
      include: [
        { model: Hoteles, as: "id_hotel_hotele" },
        { model: Clientes, as: "id_cliente_cliente" },
      ],
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with check-in=${date}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with check-in=${date}.`,
    });
  }
};

//fecha de salida
reservasController.getCheckOut = async (req, res) => {
  const date = req.params.fecha_salida;

  try {
    const data = await Reservas.findAll({
      where: { fecha_salida: { [Op.eq]: date } },
    });

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find user with check-out=${date}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retreiving user retrieving with check-out=${date}.`,
    });
  }
};

module.exports = reservasController;
