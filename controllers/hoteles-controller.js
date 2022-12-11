const { Hoteles } = require("../models.js");

const hotelesController = {};
//todos los hoteles
hotelesController.getAll = async (req, res) => {
  try {
    const data = await Hoteles.findAll({});
    res.json(data);
  } catch (error) {
    res.status(500).send({
      message: "Some error occurred while retrieving hoteles.",
    });
  }
};

//hotel por id
hotelesController.getById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Hoteles.findByPk(id, {});

    if (data) {
      res.json(data);
    } else {
      res.status(404).send({
        message: `Cannot find hotel with id=${id}`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: `Error retrieving hotel with id=${id}.`,
    });
  }
};

module.exports = hotelesController;
