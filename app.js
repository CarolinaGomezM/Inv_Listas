let inventario = new Inventario();


//MÉTODO DE AGREGAR------------------------------------

document.getElementById('btnAgregar').addEventListener('click', () => {
let codigo = Number(document.getElementById('codigo').value);
let nombre = document.getElementById('nombre').value;
let cantidad = document.getElementById('cantidad').value;
let costo = document.getElementById('costo').value;
let producto= new Producto(codigo, nombre, cantidad, costo);
let posicion = document.getElementById('pos').value;

if(!codigo || !nombre || !cantidad || !costo){
    document.getElementById('info').innerHTML= `<p>Se requieren todos los datos</p>`;
}
  let agregado = null;
  if(posicion != ""){
    agregado = inventario.AgregarPos(producto, posicion);
    console.log("No tengo nada");
    
    }else{
      agregado= inventario.agregar(producto);
      console.log("Me agrego")
    }

    if(agregado === false){
      document.getElementById('info').innerHTML= `<p>No es posible agregar el producto</p>`;
      return;
    } 

      document.getElementById('info').innerHTML= `<p>El producto ${producto.obtenerNombre()} fue agregado correctamente</p>`;
    
  
})

//MÉTODO BUSCAR -----------------------------------
document.getElementById('btnBuscar').addEventListener('click', () => {
let codigob=Number(document.getElementById('buscador').value);
let buscador= inventario.buscar(codigob);
if(buscador=== null){
  document.getElementById('info').innerHTML=`<p>Este producto no existe</p>`
}else{
  document.getElementById('info').innerHTML=`<p>El producto fué encontrado correctamente</p>`;
}
})

// MÉTODO LISTA --------------------------------
document.getElementById('btnLista').addEventListener('click', () => {
document.getElementById('info').innerHTML= `<p>   </p>`;
let lista = inventario.lista();
if(lista === null){
  document.getElementById('info').innerHTML = `<p>No hay listado por mostrar</p>`;
} else{
  document.getElementById('info').innerHTML=  inventario.lista();
}
})

// MÉTODO LISTA INVERSO ------------------
let btnListaInverso=document.getElementById('btnListaInv');
document.getElementById('btnListaInv').addEventListener('click', () => {
document.getElementById('info').innerHTML= `<p>   </p>`;
let listai = inventario.listainverso();
if(listai === null){
  document.getElementById('info').innerHTML = `<p>No hay listado por mostrar</p>`;
} else{
  document.getElementById('info').innerHTML=  inventario.listainverso();
}
})

// MÉTODO ELIMINAR ------------------------------
document.getElementById('btnBorrar').addEventListener('click', () => {
let codigoe=Number(document.getElementById('buscador').value);
let eliminar= inventario.eliminar(codigoe);
if(eliminar === false){
  document.getElementById('info').innerHTML= `<p>El producto seleccionado no fué encontrado</p>`;
}else{
  document.getElementById('info').innerHTML= `<p>El producto se eliminó correctamente</p>`;
}
})