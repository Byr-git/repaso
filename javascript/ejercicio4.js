/*// Ejercicio 1
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
console.log(`Cantidad: ${frutas.length}`);*/

/*// Ejercicio 2
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

/* Ejercicio 3
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
delete persona.profesion;*/

/* Ejercicio 4
const producto = {
    nombre: "Laptop",
    precio: 850,
    stock: 12
};

//Haz un programa que imprima:
//Producto: Laptop
//Precio: 850
//Stock: 12

function imprimirProducto() {
    console.log(
        `Producto: ${producto.nombre}\nPrecio: ${producto.precio}\nStock: ${producto.stock}`)
}

imprimirProducto()*/

// Nivel 3: Array de objetos
// Ahora empieza lo bueno. 👀
// Ejercicio 5
/*const alumnos = [
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
console.log(`Alumnos aprovados: ${contador}`)*/


// ---------- Ejercicio 6 ----------
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Lucía", nota: 9 },
    { nombre: "Carlos", nota: 6 },
    { nombre: "Marta", nota: 10 }
];

// Utilizando map(), crea un nuevo array que contenga solamente los nombres:
const nombreAlumnos = alumnos.map(alumno => alumno.nombre)
// Después crea otro array que contenga solamente las notas:
const notasAlumnos = alumnos.map(alumno => alumno.nota)
// console.log(nombreAlumnos, notasAlumnos)


// Ejercicio 7: Utilizando map(), transforma los alumnos en strings con este formato:
// "Ana tiene una nota de 8"
// "Pedro tiene una nota de 5"
// "Lucía tiene una nota de 9"...

const stringAlumnos = alumnos.map(alumno =>
    `${alumno.nombre} tiene una nota de ${alumno.nota}`
)


// ---------- Ejercicio 8 ----------
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Audífonos", precio: 80 }
];

// Utilizando filter():
// Obtén los productos que cuestan más de 100.
const productosMayoresA100 = productos.filter(producto => producto.precio > 100)
// Obtén los productos que cuestan 100 o menos.
const productosMenoresA100 = productos.filter(producto => producto.precio <= 100)
// Obtén solamente el producto "Monitor".
const obtenerProducto = productos.filter(producto => producto.nombre === "Monitor")
// console.log(productosMayoresA100, productosMenoresA100, obtenerProducto)


// ---------- Ejercicio 9 ----------
// Utilizando filter():
const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 25 },
    { nombre: "Lucía", edad: 19 },
    { nombre: "Pedro", edad: 15 },
    { nombre: "Marta", edad: 32 }
];

// Obtén los mayores de edad.
const personasMayores = personas.filter(persona => persona.edad >= 18)
// Obtén los menores de edad.
const personasMenores = personas.filter(persona => persona.edad < 18)
// Obtén las personas mayores de 20.
const personasMayoresDe20 = personas.filter(persona => persona.edad > 20)
// console.log(personasMayores, personasMenores, personasMayoresDe20)


// ---------- Ejercicio 10 ----------
// Recuerda: find() devuelve un elemento, mientras que filter() devuelve un array.
const usuarios = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Carlos", edad: 25 },
    { id: 3, nombre: "Lucía", edad: 19 },
    { id: 4, nombre: "Pedro", edad: 30 }
];

// Busca al usuario cuyo id sea 3.
const buscarID = usuarios.find(usuario => usuario.id === 3)
// Busca al usuario llamado "Pedro".
const buscarNombre = usuarios.find(usuario => usuario.nombre === "Pedro")
// Busca al usuario cuya edad sea 25.
const buscarEdad = usuarios.find(usuario => usuario.edad = 25)
// console.log(buscarID, buscarNombre, buscarEdad)


// ---------- Prueba Final ----------
const videojuegos = [
    { nombre: "Minecraft", precio: 30, categoria: "Sandbox" },
    { nombre: "FIFA", precio: 60, categoria: "Deportes" },
    { nombre: "Zelda", precio: 70, categoria: "Aventura" },
    { nombre: "Terraria", precio: 20, categoria: "Sandbox" },
    { nombre: "Mario Kart", precio: 50, categoria: "Carreras" }
];

// Obtén un array con solamente los nombres.
const nombreJuegos = videojuegos.map(videojuego => videojuego.nombre)
// Obtén los videojuegos que cuestan menos de 50.
const costoJuegos = videojuegos.filter(videojuego => videojuego.precio < 50)
// Encuentra el videojuego "Zelda".
const encontrarJuego = videojuegos.find(videojuego => videojuego.nombre === "Zelda")
// Obtén todos los videojuegos de categoría "Sandbox".
const categoriaJuego = videojuegos.filter(videojuego => videojuego.categoria === "Sandbox")
// Crea un array de strings así:
// "Minecraft cuesta $30"
// "FIFA cuesta $60"
// "Zelda cuesta $70"...
const arrayDeStringsJuegos = videojuegos.map(videojuego =>
    `${videojuego.nombre} cuesta ${videojuego.precio}`
)
// Imprime los nombres de todos los videojuegos usando for...of.
for (const videojuego of videojuegos) {
    console.log(`Nombre: ${videojuego.nombre}`)
}

console.log(nombreJuegos, costoJuegos, encontrarJuego, categoriaJuego, arrayDeStringsJuegos)

// Si quieres obtener todos los juegos de "Sandbox", ¿usarías find() o filter()? ¿Por qué?
// Usaría filter porque me permite obtener un array con distitos elementos que cumplan la condición. Si usara find solo me mostraría el primer elemento que cumpla la condición