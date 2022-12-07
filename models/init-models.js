var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _hoteles = require("./hoteles");
var _reservas = require("./reservas");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var hoteles = _hoteles(sequelize, DataTypes);
  var reservas = _reservas(sequelize, DataTypes);

  reservas.belongsTo(clientes, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  clientes.hasMany(reservas, { as: "reservas", foreignKey: "id_cliente"});
  reservas.belongsTo(hoteles, { as: "id_hotel_hotele", foreignKey: "id_hotel"});
  hoteles.hasMany(reservas, { as: "reservas", foreignKey: "id_hotel"});

  return {
    clientes,
    hoteles,
    reservas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
