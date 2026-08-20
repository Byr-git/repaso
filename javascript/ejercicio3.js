// Ejercicios usando map(), filter(), find() y reduce().

const gastos = [
    { descripcion: "Autobús", categoria: "Transporte", monto: 0.60 },
    { descripcion: "Pastelito", categoria: "Comida", monto: 0.50 },
    { descripcion: "Jugo de naranja", categoria: "Comida", monto: 0.50 },
    { descripcion: "Cuaderno", categoria: "Útiles", monto: 9.72 }
]

// 1. Crea una función llamada obtenerComidas() que devuelva un nuevo array únicamente con los gastos cuya categoría sea "Comida".
function obtenerComidas() {
    return gastos.filter((gasto) => gasto.categoria === "Comida")
}

// 2. Crear buscarGasto(descripcion) que devuelva el gasto cuyo nombre coincida con la descripción.
function buscarGasto(descripcion) {
    return gastos.find((gasto) => gasto.descripcion === descripcion)
}

// 3. Obtener solamente las descripciones.
function obtenerDescripciones(){
    return gastos.map((descripcion) => descripcion.descripcion)
}

// 4. Obtener los nombres de los gastos de una categoría concreta.
function obtenerDescripcionPorCategoria(categoria) {
    return gastos.filter((gasto) => gasto.categoria === categoria).
    map((gasto) => gasto.descripcion)
}

// 5. Función que devuelva un objeto con el total gastado en cada categoría.

function calcularTotalesPorCategoria() {
    return gastos.reduce((totales, gasto) => {
        if (totales[gasto.categoria] === undefined) {
            totales[gasto.categoria] = gasto.monto
        } else {
            totales[gasto.categoria] = totales[gasto.categoria] + gasto.monto
        }

        return totales
    }, {})
}

console.log(calcularTotalesPorCategoria())