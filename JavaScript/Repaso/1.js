
/*
//hallar el resultado del factorial
function factorial(numero){
    for (let i = 1; i<= numero; i++){
        let resultado = 1
        const siguiente = i+1
        const producto = i*siguiente
        resultado += resultado * producto
    }
    return resultado
}

const fax = factorial(6)

console.log(fax)
*/

/*
//hallar el resultado del factorial

function factorial(numero){
    let resultado = 1
    for (let i = 1; i<= numero; i++){
        const producto = i *1
        resultado = resultado * i
    }
    return resultado
}

const fax = factorial(6)

console.log(fax)

//

console.log("arrow")

const fac = (numero) =>{
    let resultado = 1
    for (let i = 1; i<= numero; i++){
        const producto = i *1
        resultado = resultado * i
    }
    return resultado
}

//console.log(fac)

*/

const recetas = [
    {
        nombre: "pan",
        ingredientes: ["azucar", "harina", "agua"],
        precio: 45000,
        peso: 93.5
    },    
    {
        nombre: "Bandeja paisa",
        ingredientes: ["huevo", "chicharron", "arroz", "frijoles"],
        precio: 60000,
        peso: 8000.634
    }    
]

recetas.forEach(function(receta){
    console.log(`
        El nombre de la receta es: ${receta.nombre}
        Los ingredientes son: ${receta.ingredientes.map((i, ingrediente) => ` ${ingrediente+1}. ${i}`)}
        El precio es: $${receta.precio}
        El peso es: ${receta.peso} gr`)
})

console.log("----------")

recetas.forEach(function(receta){
    console.log(`
        El nombre de la receta es: ${receta.nombre}
        Los ingredientes son: ${receta.ingredientes.map((ingrediente, i) => `${i+1}: ${ingrediente}\n`).join ("-")}
        El precio es: $${receta.precio}
        El peso es: ${receta.peso} gr`)
})
