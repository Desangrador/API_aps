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
    const tamaño = this.Lotes.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Lotes[tamaño-1].id + 1
    }
    this.Lotes.push(aux)
  }

  //Actualizar Lote
  Actualizar(index, aux){
    let repetir = true
    let i = 0
    let msj = ""

    if (this.Lotes.length <= 0){
      msj = "La tabla de Lotes está vacía"
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      msj = "Error, ID no válida"
    }else{
      while (repetir){
        if (i == this.Lotes.length){
        msj = "El Lote no se ha encontrado"
        repetir = false
        }else{
          if (index == this.Lotes[i].id){
            this.Lotes[i].cantidadDisponible = aux.cantidadDisponible
            this.Lotes[i].fechaVencimientoProducto = aux.fechaVencimientoProducto
            this.Lotes[i].contieneProducto = aux.contieneProducto

            msj = "Lote Actualizado"
            repetir = false
          }
          i++
        }
      }
    }
    return msj
  }

  //Actualización Parcial de Producto
  ActualizarParcial(index, aux){
    let repetir = true
    let i = 0
    let msj = ""

    if (this.Lotes.length <= 0){
      msj = "La tabla de Lotes está vacía"
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      msj = "Error, ID no válida"
    }else{
      while (repetir){
        if (i == this.Lotes.length){
        msj = "El Lote no se ha encontrado"
        repetir = false
        }else{
          if (index == this.Lotes[i].id){
            if (aux.cantidadDisponible != undefined){
              this.Lotes[i].cantidadDisponible = aux.cantidadDisponible
            }if (aux.fechaVencimientoProducto != undefined){
              this.Lotes[i].fechaVencimientoProducto = aux.fechaVencimientoProducto
            }if (aux.contieneProducto != undefined){
              this.Lotes[i].contieneProducto = aux.contieneProducto
            }

            msj = "Lote Actualizado"
            repetir = false
          }
          i++
        }
      }
    }
    return msj
  }

  //Borrar Lote
  Borrar(index){
    let msj = ""
    if (index <= 0 || index > this.Lotes.length){
      msj = "Error, ID no válida/encontrada"
    }else{
      this.Lotes.splice(index-1,1)
      msj = "Lote borrado"
    }
    return msj
  }

  //Buscar Lote
  Buscarmsj(index){
    let msj = ""
    if (this.Lotes.length <= 0){
      msj = "La tabla de Lotes está vacía"
    }else if (index <= 0 || index > this.Lotes[this.Lotes.length-1].id){
      msj = "Error, ID no válida"
    }else{
      msj = "Lote Encontrado"
    }
    return msj
  }
  Buscar(id){
    const index = Number(id)
    const lote = this.Lotes.find(item => item.id === index)
    if (lote == undefined){
      return "vacio"
    }else{
      return lote
    }
  }
}

module.exports = LotesService
