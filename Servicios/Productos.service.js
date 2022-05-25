class ProductosService{
  Productos = []

  constructor(){
    this.Productos = []
  }
  //Lista de Productos
  Lista(){
    return this.Productos
  }

  //Nuevo Producto
  Nuevo(aux){
    const tamaño = this.Productos.length
    if (tamaño == 0){
      aux.id = 1
    }else{
      aux.id = this.Productos[tamaño-1].id + 1
    }
    this.Productos.push(aux)
  }

  //Actualizar Producto
  Actualizar(index, aux){
    let repetir = true
    let i = 0
    let msj = ""

    if (this.Productos.length <= 0){
      msj = "La tabla de Productos está vacía"
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      msj = "Error, ID no válida"
    }else{
      while (repetir){
        if (i == this.Productos.length){
        msj = "El producto no se ha encontrado"
        repetir = false
        }else{
          if (index == this.Productos[i].id){

            if (aux.codigo != undefined){
              this.Productos[i].codigo = aux.codigo
            }if (aux.nombre != undefined){
              this.Productos[i].nombre = aux.nombre
            }if (aux.detalles != undefined){
              this.Productos[i].detalles = aux.detalles
            }if (aux.precio != undefined){
              this.Productos[i].precio = aux.precio
            }

          msj = "Producto Actualizado"
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

    if (this.Productos.length <= 0){
      msj = "La tabla de Productos está vacía"
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      msj = "Error, ID no válida"
    }else{
      while (repetir){
        if (i == this.Productos.length){
        msj = "El producto no se ha encontrado"
        repetir = false
        }else{
          if (index == this.Productos[i].id){

            if (aux.codigo != undefined){
              this.Productos[i].codigo = aux.codigo
            }if (aux.nombre != undefined){
              this.Productos[i].nombre = aux.nombre
            }if (aux.detalles != undefined){
              this.Productos[i].detalles = aux.detalles
            }if (aux.precio != undefined){
              this.Productos[i].precio = aux.precio
            }

          msj = "Producto Actualizado Parcialmente"
          repetir = false
          }
          i++
        }
      }
    }
    return msj
  }

  //Borrar Producto
  Borrar(index){
    let msj = ""
    if (index <= 0 || index > this.Productos.length){
      msj = "Error, ID no válida/encontrada"
    }else{
      this.Productos.splice(index-1,1)
      msj = "Producto borrado"
    }
    return msj
  }

  //BuscarProducto
  Buscarmsj(index){
    let msj = ""
    if (this.Productos.length <= 0){
      msj = "La tabla de Productos está vacía"
    }else if (index <= 0 || index > this.Productos[this.Productos.length-1].id){
      msj = "Error, ID no válida"
    }else{
      msj = "Producto Encontrado"
    }
    return msj
  }
  Buscar(id){
    const index = Number(id)
    const producto = this.Productos.find(item => item.id === index)
    if (producto == undefined){
      return "vacio"
    }else{
      return producto
    }
  }
}

module.exports = ProductosService
