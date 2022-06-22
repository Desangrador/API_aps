const bum = require("@hapi/boom")

const { models } = require("../libs/sequelize")
class LotesService{
  id = 1;

  constructor(){
  }
  //Lista de Lotes
  async Lista(){
    const datos = await models.lote.findAll()
    return datos
  }

  //Nuevo Lote
  async Nuevo(aux){
    const id2 = (await models.lote.findAll()).length
    const ultimo = await models.lote.findByPk(id2)
    if (id2 != 0){
      this.id = ultimo.id + 1;
    }else{
      this.id = 1
    }

    const producto = await models.producto.findByPk(aux.id)
    if (producto == null){
      throw bum.failedDependency("No se encontró dicho producto")
    }

    const NLote = {
      id: this.id,
      ...aux
    }

    const salida = await models.lote.create(NLote)
    return salida
  }

  //Actualizar Lote
  async Actualizar(index, aux){
    const actualizar = await models.lote.findByPk(index)

    const producto = await models.producto.findByPk(aux.id)
    if (producto == null){
      throw bum.failedDependency("No se encontró dicho producto")
    }

    if (actualizar == null){
      throw bum.notFound("Lote no encontrado")
    }
    await actualizar.set(aux)
    await actualizar.save()

    return "Operación Finalizada; Lote "+index+" Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){
    const actualizar = await models.lote.findByPk(index)

    const producto = await models.producto.findByPk(aux.id)
    if (producto == null){
      throw bum.failedDependency("No se encontró dicho producto")
    }

    if (actualizar == null){
      throw bum.notFound("Lote no encontrado")
    }
    await actualizar.set(aux)
    await actualizar.save()

    return "Operación Finalizada; Lote "+index+" Actualizado parcialmente"
  }

  //Borrar Lote
  async Borrar(index){
    const borrar = await models.lote.findByPk(index)
    if (borrar == null){
      throw bum.notFound("Producto no encontrado")
    }else{
      await borrar.destroy()
    }
    return "Operación Finalizada, Lote "+index+" borrado"
  }

  //Buscar Lote
  async Buscar(id){
    const buscado = await models.producto.findByPk(id)
    if (buscado == null){
      throw bum.notFound("Producto no encontrado")
    }
    return buscado
  }
}

module.exports = LotesService
