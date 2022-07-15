import { productosRostro } from "../helpers/database.js";
import {pintarProductos} from "./controladorLLenado.js"

export function buscarProductos(){

let buscador = document.getElementById ('buscador')

buscador.addEventListener("keyup", function(evento){

let productoBuscado = evento.target.value

let filtro = productosRostro.filter(function(producto){

    return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()) )
})
console.log(filtro)
pintarProductos(filtro)

})
}

