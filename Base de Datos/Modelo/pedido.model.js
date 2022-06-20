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
    this.belongsTo(models.cliente, {
      as: 'cliente'
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
