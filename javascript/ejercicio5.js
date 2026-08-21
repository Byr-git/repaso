const productos = [
    { nombre: "Laptop", precio: 900, categoria: "Tecnología", stock: 5 },
    { nombre: "Mouse", precio: 30, categoria: "Tecnología", stock: 20 },
    { nombre: "Teclado", precio: 50, categoria: "Tecnología", stock: 0 },
    { nombre: "Camiseta", precio: 25, categoria: "Ropa", stock: 15 },
    { nombre: "Pantalón", precio: 60, categoria: "Ropa", stock: 8 },
    { nombre: "Audífonos", precio: 80, categoria: "Audio", stock: 12 }
];

// Nivel 1: calentamiento

// 1. for...of: Imprime el nombre y precio de cada producto:
for (const producto of productos) {
    // console.log(`Nombre: ${producto.nombre} | Precio: ${producto.precio}`)
}
// 2. map(): Crea un nuevo array que contenga solamente los nombres.
const nombreProductos = productos.map(producto => producto.nombre)
// 3. map(): Crea un nuevo array con strings de este estilo: "Laptop cuesta $900"
const stringProductos = productos.map(producto => `${producto.nombre} cuesta ${producto.precio}`)
// 4. filter(): Obtén todos los productos cuyo precio sea mayor a 50.
const mayorA50 = productos.filter(producto => producto.precio > 50)
// 5. filter(): Obtén todos los productos que tengan stock disponible, es decir: stock > 0
const stockDisponible = productos.filter(producto => producto.stock > 0)
// console.log(nombreProductos, stringProductos, mayorA50, stockDisponible)

// Nivel 2: empieza la carnita

// 6. find() Encuentra el producto "Teclado".
const encontrarProducto = productos.find(producto => producto.nombre === "Teclado")
// 7. find(): Encuentra el primer producto cuyo stock sea mayor a 10.
const encontrarStockMayorA10 = productos.find(producto => producto.stock > 10)
// 8. some() Comprueba si existe algún producto que cueste más de 800. El resultado debe ser: true
const esMayorA800  = productos.some(producto => producto.precio > 800)
// 9. some(): Comprueba si existe algún producto sin stock. Debería dar: true
const sinStock = productos.some(producto => producto.stock <= 0)
// 10. every(): Comprueba si todos los productos tienen un precio mayor que 20.
const esMayorA20 = productos.every(producto => producto.precio > 20)
// 11. every(): Comprueba si todos los productos tienen stock disponible. Este debería dar: false
const hayStockDisponible = productos.every(producto => producto.stock > 0)
console.log(encontrarProducto, encontrarStockMayorA10, esMayorA800, sinStock, esMayorA20, hayStockDisponible)