const enjoi = require('joi')

//ID
const id = enjoi.number().integer();
//Cantidad Disponible
const cantidad = enjoi.number().min(1).integer()
//fecha de Vencimiento del Producto
const fechaVenc = enjoi.date().min('now')
//contiene un Producto
const productoId = enjoi.number().integer().min(1)

const crearLoteEsquema = enjoi.object({
  cantidad: cantidad.required(),
  fechaVenc: fechaVenc.required(),
  productoId: productoId.required()
})

const actLoteEsquema = enjoi.object({
  cantidad,
  fechaVenc,
  productoId
})

const buscarLoteEsquema = enjoi.object({
  id: id.required()
})

module.exports = { crearLoteEsquema, actLoteEsquema, buscarLoteEsquema}
