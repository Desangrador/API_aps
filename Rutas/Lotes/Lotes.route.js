const exs = require("express")
const rtr = exs.Router()

const Lotes = []

//Lista de Lotes
rtr.get('/', (req, res) =>{
  res.send("Ventana de Lotes")
})

rtr.get('/lista', (req, res) =>{
  res.status(200).json(Lotes)
})

//Nuevo Lote
rtr.post('/', (req,res)=>{
  const aux = req.body

  res.status(201).json({
    mensaje: "Lote agregado",
    datos: aux
  })
  Lotes.push(aux)
})


//Actualizar Lote
rtr.put('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: "Lote Actualizado",
    datos: aux,
    id
  })
})

//Actualización Parcial de un Lote
rtr.patch('/:id', (req,res) =>{
  const { id } = req.params
  const aux = req.body
  res.json({
    mensaje: "Lote Actualizado parcialmente",
    datos: aux,
    id
  })
})

//Borrar Lote
rtr.delete('/:id', (req,res) =>{
  const { id } = req.params
  res.json({
    mensaje: "Lote Borrado",
    id
  })
})

//Exports
module.exports = rtr;
