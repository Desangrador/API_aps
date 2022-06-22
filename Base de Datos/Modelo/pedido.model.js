const { Model, Sequelize, DataTypes } = require("sequelize")

const TB_PEDIDO = 'pedidos'

const pedidoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  fechaEmision:{
    allowNull: false,
    type: DataTypes.DATE
  },
  fechaVencimiento:{
    allowNull: false,
    type: DataTypes.DATE
  },
  estado:{
    allowNull: true,
    type: DataTypes.STRING
  },
  facturaId: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'facturas'
    },
    field: 'perteneceFactura'
  },
  clienteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clientes'
    },
    field: 'perteneceCliente'
  }
}

class Pedido extends Model{
  static associate(models){
    this.belongsTo(models.factura, {
      as: 'factura'
    })
    this.belongsTo(models.cliente, {
      as: 'cliente'
    })
    this.hasMany(models.detallepedido, {
      foreignKey: 'pedidoId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TB_PEDIDO,
      modelName: 'pedido',
      timestamps: false
    }
  }
}

module.exports = { TB_PEDIDO, pedidoSchema, Pedido }
