const DataTypes = require("sequelize").DataTypes;
const _Clientes = require("./clientes");
const _Hoteles = require("./hoteles");
const _Reservas = require("./reservas");

function initModels(sequelize) {
  const Clientes = _Clientes(sequelize, DataTypes);
  const Hoteles = _Hoteles(sequelize, DataTypes);
  const Reservas = _Reservas(sequelize, DataTypes);

  Reservas.belongsTo(Clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  Clientes.hasMany(Reservas, { as: "reservas", foreignKey: "id_cliente"});
  Reservas.belongsTo(Hoteles, { as: "id_hotel_hotele", foreignKey: "id_hotel"});
  Hoteles.hasMany(Reservas, { as: "reservas", foreignKey: "id_hotel"});

  return {
    Clientes,
    Hoteles,
    Reservas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
