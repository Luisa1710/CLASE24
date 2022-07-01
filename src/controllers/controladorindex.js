//ENTRADAS = VARIABLES
let nombre = "Juan"
let numero = 5
let politico = {
    nombre: "Alvaro",
    poder: "dinero",
    edad : 64
}



// CONTROLAR ETIQUETA 
// 1. NECESITO aLMACENAR UNA VARIABLE
let titulo = document.getElementById ("titulo")
let imagen = document.getElementById ("foto")
let titulo2= document.getElementById ("titulo2")
let boton =  document.getElementById("boton")
// 2. IDENTIFICO QUE QUIERO CONTROLAR



//3. MODIFICANDO ESTILOS
//3.1 AAGREGANDO UNA CLASE

titulo.classList.add('text-danger', 'fuente2') 
titulo2.classList.add('text-danger') 

// 3.2 QUITANDO UNA CLASE

titulo2.classList.remove('text-info')

//4 ESCUCHANDO EVENTOS 
boton.addEventListener ("click", function(){
    alert("Hola")
    // 2.1 CAMBIANDO EL TEXTO
    titulo.textContent = "Chao"
    // 2.2 CAMBIANDO LA FUENTE
    imagen.src = "https://placeimg.com/640/480/animals"
})




