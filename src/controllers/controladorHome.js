//Importaciones
import { productosRostro } from "../helpers/database.js";
import {pintarProductos} from "./controladorLLenado.js"
import{buscarProductos} from "./controladorbuscar.js"
import {ampliarInfoProducto} from './controladorEvento.js'

pintarProductos(productosRostro)
buscarProductos()


// Escuchar click en el contenedor padre de la tienda


let contenedor =  document.getElementById ("fila")
contenedor.addEventListener ("click", function(evento){
   
   let producto = ampliarInfoProducto(evento)
  
    
    console.log (producto)

    //Almacenar en el local storage la informacion del producto seleccionado

    localStorage.setItem('infoProducto',JSON.stringify (producto))

    console.log(localStorage.getItem('infoProducto'))

    window.location.href = './src/views/ampliarinfo.html'


})