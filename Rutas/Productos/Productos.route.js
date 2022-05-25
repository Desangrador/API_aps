const exs = require("express")
const rtr = exs.Router()

const productoService = require("../../Servicios/Productos.service")
const svc = new productoService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Productos")
})

//Lista de Productos
rtr.get('/lista', (req, res) =>{
  res.status(200).json(svc.Lista())
})

//Nuevo Producto
rtr.post('/', (req,res)=>{
  const aux = req.body
  svc.Nuevo(aux)

  res.status(201).json({
    mensaje: "Producto agregado",
    Datos: aux
  })
})

//Actualizar Producto
rtr.put('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.Actualizar(id, aux),
    datosInsertados: aux
  })
})

//Actualización Parcial de Producto
rtr.patch('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.ActualizarParcial(id, aux),
    datosInsertados: aux
  })
})

//Borrar Producto
rtr.delete('/:id', (req,res) =>{
  const { id } = req.params

  res.json({
    mensaje: svc.Borrar(id),
  })
})

//Buscar Producto
rtr.get('/:id', (req,res)=>{
  const { id } = req.params

  res.status(200).json({
    mensaje: svc.Buscarmsj(id),
    datos: svc.Buscar(id)
  })
})

//Exports
module.exports = rtr;
