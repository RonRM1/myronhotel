const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reservas', {
    id_reservas: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_entrada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_salida: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    importe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'clientes',
        key: 'id'
      }
    },
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hoteles',
        key: 'id_hotel'
      }
    }
  }, {
    sequelize,
    tableName: 'reservas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_reservas" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_hotel",
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
    ]
  });
};
