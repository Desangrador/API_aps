const { TB_LOTES, loteSchema, Lote } = require("./lote.model")
const { TB_PRODUCTO, productoSchema, Producto } = require("./producto.model")
const { TB_CLIENTE, clienteSchema, Cliente } = require("./cliente.model")
const { TB_FACTURA, facturaSchema, Factura } = require("./factura.model")
const { TB_PEDIDO, pedidoSchema, Pedido } = require("./pedido.model")
const { TB_DETALLEPEDIDO, detallePedidoSchema, DetallePedido } = require("./detallePedido.model")
const { TB_DETALLEATENCION, detalleAtencionSchema, DetalleAtencion } = require("./detalleAtencion.model")

function setupModels(sequelize){
  Producto.init(productoSchema, Producto.config(sequelize))
  Lote.init(loteSchema, Lote.config(sequelize))
  Cliente.init(clienteSchema, Cliente.config(sequelize))
  Factura.init(facturaSchema, Factura.config(sequelize))
  Pedido.init(pedidoSchema, Pedido.config(sequelize))
  DetallePedido.init(detallePedidoSchema, DetallePedido.config(sequelize))
  DetalleAtencion.init(detalleAtencionSchema, DetalleAtencion.config(sequelize))

  //Relaciones
  Lote.associate(sequelize.models)
  DetalleAtencion.associate(sequelize.models)
  DetallePedido.associate(sequelize.models)
  Factura.associate(sequelize.models)
  Pedido.associate(sequelize.models)
}

module.exports = { setupModels }
