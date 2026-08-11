const numeros = [14, 3, 22, 7, 18, 5, 30, 11, 26, 9, 40, 2]

// filter() → obtener los números pares.
// sort() → ordenar los pares de mayor a menor.
const pares = numeros.filter((num) => num % 2 === 0).sort((a, b) => b - a)

// filter() → obtener los números impares.
// sort() → ordenar los impares de menor a mayor.
const impares = numeros.filter((num) => num % 2 !== 0).sort((a, b) => a - b)

// map() → crear un nuevo array con los pares multiplicados por 3.
const paresPor3 = pares.map((num) => num * 3)

// map() → crear un nuevo array con los impares elevados al cuadrado.
const imparesAlCuadrado = impares.map((num) => num ** 2)

// reduce() → calcular la suma de los pares transformados.
const sumaPares = paresPor3.reduce((acum, num) => acum + num, 0)

// reduce() → calcular la suma de los impares transformados.
const sumaImpares = imparesAlCuadrado.reduce((acum, num) => acum + num, 0)

// Usar .length para obtener cuántos pares e impares había originalmente.
const cantPares = paresPor3.length
const cantImpares = imparesAlCuadrado.length

// Mostrar todo en un console.log().
console.log(`Pares originales: ${pares}
Cantidad pares: ${cantPares}
Pares * 3: ${paresPor3}
Suma: ${sumaPares}`)

console.log(`Impares originales: ${impares}
Cantidad impares: ${cantImpares}
Impares * 3: ${imparesAlCuadrado}
Suma: ${sumaImpares}`)



/*Pares originales: 40,30,26,22,18,14,2
Cantidad pares: 7
Pares × 3: 120,90,78,66,54,42,6
Suma pares × 3: 456

Impares originales: 3,5,7,9,11
Cantidad impares: 5
Impares²: 9,25,49,81,121
Suma impares²: 285*/