const { Model, Sequelize, DataTypes } = require("sequelize")

const TB_PRODUCTO = 'productos'

const productoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  codigo: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  nombre:{
    allowNull: false,
    type: DataTypes.STRING
  },
  detalles:{
    allowNull: false,
    type: DataTypes.STRING
  },
  precio:{
    allowNull: false,
    type: DataTypes.DECIMAL
  }
}

class Producto extends Model{
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TB_PRODUCTO,
      modelName: 'producto',
      timestamps: false
    }
  }
}

module.exports = { TB_PRODUCTO, productoSchema, Producto }
