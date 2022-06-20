const bum = require("@hapi/boom")

class LotesService{
  Lotes = []

  constructor(){
    this.Lotes = []
  }
  //Lista de Lotes
  Lista(){
    return this.Lotes
  }

  //Nuevo Lote
  Nuevo(aux){
  }

  //Actualizar Lote
  async Actualizar(index, aux){

    return "Operación Finalizada; Lote Actualizado"
  }

  //Actualización Parcial de Producto
  async ActualizarParcial(index, aux){

    return "Operación Finalizada; Lote Actualizado parcialmente"
  }

  //Borrar Lote
  async Borrar(index){

    return "Operación Finalizada; Lote"+index+"Borrado"
  }

  //Buscar Lote
  async Buscar(id){

  }
}

module.exports = LotesService
