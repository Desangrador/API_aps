const { Model, Sequelize, DataTypes } = require("sequelize")

const TB_DETALLEATENCION = 'detallesatencion'

const detalleAtencionSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  cantidad: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  loteId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'lotes'
    },
    field: 'provieneDeLote'
  },
  detallepedidoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'detallespedido'
    },
    field: 'indluidoEnDetalleAtencion'
  }
}

class DetalleAtencion extends Model{
  static associate(models){
    this.belongsTo(models.lote, {
      as: 'lote'
    })
    this.belongsTo(models.detallepedido, {
      as: 'detallepedido'
    })
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TB_DETALLEATENCION,
      modelName: 'detalleatencion',
      timestamps: false
    }
  }
}

module.exports = { TB_DETALLEATENCION, detalleAtencionSchema, DetalleAtencion }
