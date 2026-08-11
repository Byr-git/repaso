const gastos = [
    {descripcion: 'Autobús', categoria: 'Transporte', monto: 0.60},
    {descripcion: 'Pastelito', categoria: 'Comida', monto: 0.50},
    {descripcion: 'Jugo de naranja', categoria: 'Comida', monto: 0.50}
]

// 1. Crear una función agregarGasto() que reciba la descripción, categoría y monto, y agregue un nuevo gasto al array.
function agregarGasto(descripcion, categoria, monto) {
    gastos.push({descripcion: descripcion, categoria: categoria, monto: monto})
}
agregarGasto("Cuaderno", "Útiles", 9.72)

// 2. Crear una función calcularTotal() que devuelva cuánto dinero se ha gastado en total (Usando bucle for, sin reduce)
function calcularTotal() {
    let total = 0
    for (let i = 0; i < gastos.length; i++) {
        total = total + gastos[i].monto
    }
    return total
}

// 3. Crear una función mostrarPorCategoria(categoria) que muestre únicamente los gastos pertenecientes a esa categoría.
function mostrarPorCategoria(categoria) {
    let gastoPorCategoria = []
    for (let i = 0; i < gastos.length; i++) {
        if (gastos[i].categoria === categoria) {
            gastoPorCategoria.push(gastos[i])
        }
    }
    return gastoPorCategoria
}

// console.log(mostrarPorCategoria('Comida'))

// Crear una función gastoMayor() que encuentre cuál ha sido el gasto más caro.
function gastoMayor() {
    let mayor = 0
    let gastoMasCaro = null
    for (let i = 0; i < gastos.length; i ++) {
        if (gastos[i].monto > mayor) {
            mayor = gastos[i].monto
            gastoMasCaro = gastos[i]
        }
    }
    return gastoMasCaro
}

console.log(gastoMayor())

// Finalmente, mostrar algo parecido a:

/*
Gastos registrados:
Almuerzo - Comida - $4.50
Bus - Transporte - $0.30
Cuaderno - Estudios - $2.50

Total gastado: $7.30

Gastos de Comida:
Almuerzo - $4.50

Gasto más caro:
Almuerzo - $4.50
*/