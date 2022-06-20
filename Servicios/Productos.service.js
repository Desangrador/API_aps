const vum = require("@hapi/boom")

const getConnection = require("../libs/postgres")
const piscina = require("../libs/postgres.pool")
const secuela2 = require("../libs/sequelize")

class ProductosService{
  Productos = []
  id = 0
  constructor(){
    this.Productos = []
    this.piscina = piscina
    this.piscina.on('error', (err) => console.log(err))

  }
  //Lista de Productos
  async Lista(){
    // postgres
    // const cliente = await getConnection()
    // const salida = await cliente.query('select * from producto')
    // return salida.rows

    // postgres pool
    const consulta = "select * from productos"
    const [ data ] = await secuela2.query(consulta)
    return data
  }

  //Nuevo Producto
  async Nuevo(aux){
    const NProd = {
      id: this.id + 1,
      ...aux
    }
    const { id, codigo, nombre, detalles, precio } = NProd

    const cliente = await getConnection()
    await cliente.query("insert into producto values ("+ id +", '"+ codigo +"', '"+ nombre +"', '"+ detalles +"', '"+ precio +"')")
    return NProd
  }

  //Actualizar Producto
  async Actualizar(index, aux){

    return "Operación Finalizada; Producto Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){

    return "Operación Finalizada; Producto Actualizado parcialmente"
  }

  //Borrar Producto
  async Borrar(index){

    return "Operación Finalizada; Producto "+index+" Borrado"
  }

  //BuscarProducto
  async Buscar(id){

  }

  //Pruebas
  async prueba(id){
  }
}

module.exports = ProductosService
