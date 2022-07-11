let plato1= 
{
    nombre:'Pasta napoli', 
    precio:20000,
    descripcion:'Pasta vegetariana hecha en casa servida con Pomodoros Italianos, albahaca, ajo y aceite de oliva. puedes escoger tu tipo de pasta o risotto preferida spaghetti, fetuccine, penne, rissoto, raviolli',
    foto: "",
    categoria: 'Almuerzo'
}



let plato2= 
{
    nombre:'Marinara', 
    precio:28000,
    descripcion:'Pasta de mar hecha en casa.(opción con crema o aceite de oliva) Camarones, Calamares, ajo, perejil, albahaca, vino blanco y queso parmesano.',
    foto: "",
    categoria: 'Almuerzo'
}

let plato3= 
{
    nombre:'Gelato artigianale', 
    precio:5000,
    descripcion:'Chocolate intenso, vainilla, maracuya,pistacchio, banano, nutella, pie de limon.',
    foto: "",
    categoria: 'Postre'
}

let plato4= 
{
    nombre:'Crepe de nutella con helado', 
    precio:10000,
    descripcion:'Crepe de nutella con helado y bannano o fresa',
    foto: "",
    categoria: 'Postre'
}

let plato5= 
{
    nombre:'Berry proteina smoothie', 
    precio:9000,
    descripcion:'Bebida de almendras, proteína de vainilla, fresa, arándanos, avena, agraz. calorías (340)',
    foto: "",
    categoria: 'Bebida'
}


//1.forEach
let platos = Array (plato1,plato2,plato3,plato4,plato5)

platos.forEach(function(producto){
    console.log (producto.nombre)
})

//2. Filter

let resultado= platos.filter(function(plato){

   return(plato.categoria=='Almuerzo' )

})

console.log (resultado)

let precio= platos.filter(function(plato){

    return(plato.precio>20000  && plato.precio<30000 )
 
 })
 
 console.log (precio)

 let categoria= platos.filter(function(plato){

    return(plato.categoria== 'Almuerzo'  || plato.categoria == 'Postre' )
 
 })
 
 console.log (categoria)


 // 3.find = Solo entrega un objeto del arreglo


 let busqueda = platos.find (function(plato) {
 
    return (plato.precio== 10000)
 } 
   
 )
 console.log(busqueda)


 let busquedas = platos.find (function(plato) {
 
    return (plato.categoria== 'Almuerzo')
 } 
   
 )
 console.log(busquedas)


 //4.map

 let mapa = platos.map (function(plato){

    return(plato.categoria='Plato Fuerte' )
 })

 console.log (mapa)

 //5.push

 let plato6= { nombre:'Limonata de coco', 
 precio:8000,
 descripcion:'Limoada de coco',
 foto: "",
 categoria: 'Bebida'}

 platos.push (plato6)
 console.log (platos)