const vum = require("@hapi/boom")

const { models } = require("../libs/sequelize")

class ProductosService{
  id = 0

  constructor(){
  }

  //Lista de Productos
  async Lista(){
    const datos = await models.producto.findAll()
    return datos
  }

  //Nuevo Producto
  async Nuevo(aux){
    const id2 = (await models.producto.findAll()).length
    const ultimo = await models.producto.findByPk(id2)
    if (id2 != 0){
      this.id = ultimo.id + 1;
    }else{
      this.id = 1
    }
    const NProd = {
      id: this.id,
      ...aux
    }

    const salida = await models.producto.create(NProd)
    return salida
  }

  //Actualizar Producto
  async Actualizar(index, aux){
    const actualizar = await models.producto.findByPk(index)
    if (actualizar == null){
      throw vum.notFound("Producto no encontrado")
    }
    await actualizar.set(aux)
    await actualizar.save()

    return "Operación Finalizada; Producto "+index+" Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){
    const actualizar = await models.producto.findByPk(index)
    if (actualizar == null){
      throw vum.notFound("Producto no encontrado")
    }
    await actualizar.set(aux)
    await actualizar.save()

    return "Operación Finalizada; Producto "+index+" Actualizado parcialmente"
  }

  //Borrar Producto
  async Borrar(index){
    const borrar = await models.producto.findByPk(index)
    if (borrar == null){
      throw vum.notFound("Producto no encontrado")
    }else{
      await borrar.destroy()
    }
    return "Operación Finalizada, Producto "+index+" borrado"
  }

  //BuscarProducto
  async Buscar(id){
    const buscado = await models.producto.findByPk(id)
    if (buscado == null){
      throw vum.notFound("Producto no encontrado")
    }
    return buscado.id
  }

}

module.exports = ProductosService
