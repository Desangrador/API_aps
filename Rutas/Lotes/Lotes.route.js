const exs = require("express")
const rtr = exs.Router()

const LotesService = require("../../Servicios/Lotes.service")
const svc = new LotesService

rtr.get('/', (req, res) =>{
  res.send("Ventana de Lotes")
})

//Lista de Lotes
rtr.get('/lista', (req, res) =>{
  res.status(200).json(svc.Lista())
})

//Nuevo Lote
rtr.post('/', (req,res)=>{
  const aux = req.body
  svc.Nuevo(aux)

  res.status(201).json({
    mensaje: "Lote añadido",
    datos: aux
  })
})


//Actualizar Lote
rtr.put('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.Actualizar(id,aux),
    datos: aux
  })
})

//Actualización Parcial de un Lote
rtr.patch('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: svc.ActualizarParcial(id,aux),
    datos: aux
  })
})

//Borrar Lote
rtr.delete('/:id', (req,res) =>{
  const { id } = req.params
  res.json({
    mensaje: svc.Borrar(id),
    id
  })
})

//Buscar Lote
rtr.get('/:id', (req,res)=>{
  const { id } = req.params

  res.status(200).json({
    mensaje: svc.Buscarmsj(id),
    datos: svc.Buscar(id)
  })
})

//Exports
module.exports = rtr;
