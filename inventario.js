class Inventario{
    constructor(){
        this.primero = null;
        this.cont = 0;
    }

    buscar(codigo){
        let aux = this.primero;
        while(aux != null){
            if(aux.codigo === codigo){
                return aux;
            }
            aux = aux.siguiente;
        }
        return null;
       
}

    conseguirPosicion(codigo){
        let posicion = 0;
        let aux = this.primero;
        while(aux != null){
            if(aux.codigo === codigo){
                return posicion;
            }
            posicion++;
            aux = aux.siguiente;
        }
        return -1;
    } 


      _agregateRec(nuevo, producto){
        if(producto.siguiente == null){
          producto.siguiente = nuevo;
          this.cont++;
          } else {
              this._agregateRec(nuevo, producto.siguiente);
          }          
      }

      agregar(nuevo)
        {
            if(this.buscar(nuevo.obtenerCodigo()) != null){
                return false;
            } 
          if(this.primero == null){
            this.primero = nuevo;
            this.primero.siguiente = null;
            this.cont++;
            return true;
        } else{
            this._agregateRec(nuevo,this.primero);
        }
    }

    AgregarPos(nuevo, index)
    {
        if(this.buscar(nuevo.obtenerCodigo()) != null){
            return false;
        } 
        index = Number(index);
        if(index < 0 || index > this.cont)
        {
            return false;
        }
        if(this.primero == null)
        {
            this.primero = nuevo;
            this.cont++;
            return true;
        }
 
        let aux = this.primero;
        let auxs = null;
        if (index == 0)
        {
            nuevo.siguiente = aux;
            this.primero = nuevo;
            return true;
        }else
        
        for(let i = 0; i < index; i++)
        {
            auxs = aux;
            aux = aux.siguiente;
        }
        nuevo.siguiente = aux;
        auxs.siguiente = nuevo;
        this.cont++;
        return true;
    }
    
    lista(){
      let res="";
      let aux = this.primero;
      while(aux != null){
          res += aux.obtenerDetalles() + "<br>";
          aux = aux.siguiente;
      }
      return res;
    }

    listainverso(){
      let listadoInverso="";
      let auxListado = "";
      let aux = this.primero;
      while(aux != null){
          auxListado = listadoInverso;
          listadoInverso = "<br>";
          listadoInverso += aux.obtenerDetalles() + auxListado ;
  
      
          aux = aux.siguiente;
      }
      return listadoInverso;
    }

    eliminar(codigo){
      let pos = this.buscar(codigo);

        if (pos == null){
            return false;
        } 

       if(this.primero.codigo === codigo){
        this.primero = this.primero.siguiente;
        this.cont--;
        return true;
       }

       let aux = this.primero;    
       while(aux != null)
       {
        if(aux.siguiente.codigo === codigo){
                aux.siguiente = aux.siguiente.siguiente;
                this.cont--;
                return true;
            }else{
                aux = aux.siguiente;
            }   
        }
            
       
       return false;
    }
}
