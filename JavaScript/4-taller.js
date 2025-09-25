
//Agregar producto: Recibe nombre, precio y stock inicial. Genera un id único usando el  indice, ejemplo: 0,1,2,3,4, 5...
//Listar productos: Mostrar id, nombre, precio y stock.
//Reporte de stock bajo: Mostrar productos con stock <= 2.


let productos = [
  { id: "1", nombre: "Camisa", precio: 50000, stock: 10 },
  { id: "2", nombre: "Pantalón", precio: 80000, stock: 5 },
  { id: "3", nombre: "Zapatos", precio: 120000, stock: 3 }
];

let ventas = []; 

//agrego producto 4
function agregarProducto(nombre, precio, stock) { 
  const nuevo_p = {
    id: "4", 
    nombre: "medias", 
    precio: 5000, 
    stock: 6
  }
  productos.push(nuevo_p)
}

//listar productos
function listarProductos() { 
  let list = productos.forEach(pro => {
  console.log(`id: ${pro.id} , nombre: ${pro.nombre} , precio: ${pro.precio} , stock ${pro.stock}`)
  })
  console.log(list)
}

//stock bajo
function reporteStockBajo() { 
  const reporte = productos.filter(p => p.stock <= 2)
  reporte.forEach(p => {
    console.log(`id: ${p.id} , nombre: ${p.nombre} , precio: ${p.precio} , stock ${p.stock}`)
  })
}


//llamado de funciones
console.log("Producto 4 agregado")
agregarProducto()
console.log("Lista de productos")
listarProductos()
console.log(reporteStockBajo)
reporteStockBajo()

//Imprimir
productos.forEach(producto => {
    console.log(producto)
})
//carolina te odio
