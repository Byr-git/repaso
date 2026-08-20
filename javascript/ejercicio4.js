// Ejercicio 1
const frutas = ["manzana", "pera", "banana", "mango", "uva"];

// Imprime "banana". 
console.log(frutas[2]);
// Cambia "pera" por "sandía".
frutas[1] = "sandía";
// Agrega "kiwi" al final.
frutas.push("kiwi");
// Elimina "manzana".
frutas.shift();
// Imprime cuántas frutas hay.
console.log(`Cantidad: ${frutas.length}`);

// Ejercicio 2
const numeros = [10, 20, 30, 40, 50];

// Usando for...of, imprime cada número.
for (const numero of numeros) {
    console.log(numero)
};
// Después, usando for...of, calcula la suma de todos los números.
let suma = 0
for (let numero of numeros) {
    suma += numero
};
console.log(suma)

// Ejercicio 3
const persona = {
    nombre: "Sofía",
    edad: 22,
    ciudad: "Quito",
    profesion: "Diseñadora"
};

// Imprime el nombre.
console.log(`Nombre: ${persona.nombre}`);
// Imprime la ciudad.
console.log(`Ciudad: ${persona.ciudad}`);
// Cambia la edad a 23.
persona.edad = 23;
// Agrega una propiedad llamada pais con valor "Ecuador".
persona.pais = "Ecuador";
// Elimina la propiedad profesion.
delete persona.profesion;

// Ejercicio 4
const producto = {
    nombre: "Laptop",
    precio: 850,
    stock: 12
};

/*Haz un programa que imprima:
Producto: Laptop
Precio: 850
Stock: 12*/

function imprimirProducto() {
    console.log(
        `Producto: ${producto.nombre}\nPrecio: ${producto.precio}\nStock: ${producto.stock}`)
}

imprimirProducto()

// Nivel 3: Array de objetos
// Ahora empieza lo bueno. 👀
// Ejercicio 5
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Lucía", nota: 9 },
    { nombre: "Carlos", nota: 6 },
    { nombre: "Marta", nota: 10 }
];

// Imprime el nombre de cada alumno.
for (const alumno of alumnos) {
    console.log(`Nombre: ${alumno.nombre}`)
}
// Imprime el nombre y la nota de cada alumno.
for (const alumno of alumnos) {
    console.log(`Nombre: ${alumno.nombre}\nNota: ${alumno.nota}`)
}
// Imprime solamente los alumnos aprobados. Considera aprobado >= 7.
for (const alumno of alumnos) {
    if (alumno.nota >= 7) {
        console.log(alumno)
    }
}
// Cuenta cuántos alumnos aprobaron.
let contador = 0
for (const alumno of alumnos) {
    if (alumno.nota >= 7) {
        contador = contador + 1
    }
}
console.log(`Alumnos aprovados: ${contador}`)
