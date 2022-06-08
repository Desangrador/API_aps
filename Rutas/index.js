const exs = require("express")

//Imports
const ProductosRuta = require ("./Productos/Productos.route")
const LotesRuta = require ("./Lotes/Lotes.route")
const ClientesRuta = require("./clientes/Clientes.route")

function routes(app){
  const ruta = exs.Router()
  app.use("/API/v1", ruta);
  ruta.use("/productos", ProductosRuta);
  ruta.use("/lotes", LotesRuta);
  ruta.use("/clientes", ClientesRuta)
}

module.exports = routes;
