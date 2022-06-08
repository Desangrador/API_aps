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
rtr.put('/:id', async (req,res,next) =>{
  try {
    const { id } = req.params
    const aux = req.body
    const msj = await svc.Actualizar(id, aux)
    res.json({
      Mensaje: msj,
      datosInsertados: aux
    })
  }catch (error) {
    next(error)
  }
})

//Actualización Parcial de Producto
rtr.patch('/:id', async (req,res,next) =>{
  try {
    const { id } = req.params
    const aux = req.body
    const msj = await svc.ActualizarParcial(id, aux)
    res.json({
      mensaje: msj,
      datosInsertados: aux
    })
  } catch (error) {
    next(error)
  }

})

//Borrar Producto
rtr.delete('/:id', async(req,res, next) =>{
  try {
    const { id } = req.params
    const msj = await svc.Borrar(id)
    res.json({
      mensaje: msj
    })
  } catch (error) {
    next(error)
  }

})

//Buscar Producto
rtr.get('/:id', async (req,res,next)=>{
  try {
    const { id } = req.params
    const productoBuscado = await svc.Buscar(id)
    res.status(200).json({
      mensaje: "Operación Finalizada; Producto Encontrado",
      datos: productoBuscado
    })
  } catch (error) {
    next(error)
  }
})

// Pruebas
rtr.copy('/:id', async(req,res,next)=>{
  try {
    const { id } = req.params
    const msj = await svc.prueba(id)
    res.status(200).json(msj)
  }catch (error) {
    // res.status(404).json({
    //   mensaje: error.message
    // })
    next(error)
  }
})

// rtr.copy('/:id', (req,res,next)=>{
//   const { id } = req.params
//   const msj = svc.prueba2(id)
// })


//Exports
module.exports = rtr;
