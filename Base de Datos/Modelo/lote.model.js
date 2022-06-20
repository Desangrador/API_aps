const { Model, Sequelize, DataTypes } = require("sequelize")

const TB_LOTES = 'lotes'

const loteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  fechaVenc: {
    allowNull: false,
    type: DataTypes.DATE,
  },

  //Relaciones
  productoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'productos'
    },
    field: 'contieneProducto'
  }
}

class Lote extends Model{
  static associate(models){
    this.belongsTo(models.producto, {
      as: 'producto'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TB_LOTES,
      modelName: 'lote',
      timestamps: false
    }
  }
}

module.exports = { TB_LOTES, loteSchema, Lote }
