
/*
const tareas = [
    {
        createdAt: new Date(),
        date: null,
        IsCompleted: false,
        title : "Tarea 1",
        description: "Descripcion one"
    },
    {
        createdAt: new Date(),
        date: new Date("2025/09/11"),
        IsCompleted: false,
        title : "Tarea 2",
        description: "Descripcion two"
    },
    {
        createdAt: new Date(),
        date: new Date("2025/09/09"),
        IsCompleted: true,
        title : "Tarea 3",
        description: "Descripcion three"
    }
]

console.log(tareas[0].title)
tareas.forEach(tarea => {
    console.log(tarea.title)
})



//Una aplicación web de una biblioteca necesita guardar información de sus libros en formato JSON para mostrarla a los usuarios.
//Cada libro tiene:
//título (string)
//autor (string)
//año (number)
//categorías (array de strings)
//disponible (boolean)
//La aplicación necesita:
//Crear un objeto en JS que contenga un array de libros (mínimo 3).
//Acceder al título del primer libro y a la primera categoría del segundo libro.
//Modificar el estado de disponibilidad del tercer libro a false.
//Agregar una nueva categoría al primer libro.
//Convertir el objeto a JSON (string) usando JSON.stringify().


const bibliotecas = [
    {
        title: "romeo y julieta",
        autor: "William Shakespeare",
        año: 1599,
        categoria: ["Tragedia", "Romance"],
        disponible: true
    },
    {
        title: "boulevard",
        autor: "Flor M. Salvador",
        año: 2020,
        categoria: ["Romance", "Ficcion"],
        disponible: true
    },
        {
        title: "El libro troll",
        autor: "elRubius",
        año: 2014,
        categoria: ["humor", "Troll"],
        disponible: true
    }
]


//Impresion
console.log("   Informacion de libros")
bibliotecas.forEach(libro => {
    console.log(libro)
})

//muestro titulo primer libro
console.log("   Titulo del primer libro")
console.log(bibliotecas[0].title)

//muestro categoria segundo libro
console.log("   Categoria del segundo libro")
console.log(bibliotecas[1].categoria[0])

//modificar el estado del tercer libro
console.log("   Modificacion del tercer libro")
bibliotecas[2].disponible = false
console.log(bibliotecas[2].disponible)

//Agregar categoria al primer libro
console.log("   Agrego nueva categoria")
bibliotecas[0].categoria.push("ficcion")
console.log(bibliotecas[0].categoria)

//

let biblioteca = JSON.stringify(bibliotecas)
console.log(biblioteca)

*/

//Una tienda online tiene un listado de productos en un objeto tipo JSON. 
//Quieren crear un nuevo array que contenga solo los nombres de los productos en mayúsculas 
//para mostrarlos en una sección especial de la página (investigar método toUpperCase)
//La misma tienda quiere filtrar solo los productos cuyo precio sea mayor o igual a 1000 para ponerlos en la sección de “Ofertas Premium




const tienda = {
  productos: [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 900 }
  ]
};

const p1 = tienda.productos.map(producto1 => producto1.nombre.toUpperCase())

console.log(p1)

