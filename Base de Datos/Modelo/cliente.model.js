const { Model, Sequelize, DataTypes } = require("sequelize")

const TB_CLIENTE = 'clientes'

const clienteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  ruc: {
    allowNull: true,
    unique: true,
    type: DataTypes.STRING
  },
  dni: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  aPaterno:{
    allowNull: false,
    type: DataTypes.STRING
  },
  aMaterno:{
    allowNull: false,
    type: DataTypes.STRING
  },
  telefono:{
    allowNull: false,
    type: DataTypes.STRING
  },
  correo:{
    allowNull: false,
    type: DataTypes.STRING
  }
}

class Cliente extends Model{
  static associate(models){
    this.hasMany(models.factura, {
      foreignKey: 'clienteId'
    })
    this.hasMany(models.pedido, {
      foreignKey: 'clienteId'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TB_CLIENTE,
      modelName: 'cliente',
      timestamps: false
    }
  }
}

module.exports = { TB_CLIENTE, clienteSchema, Cliente }
