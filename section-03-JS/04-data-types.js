console.log("Prueba");

// TIPOS DE DATOS PRIMITIVOS

// numero
console.log(8);
console.log(8.5);

// nan

let f = " Hello";
console.log(8 / f);
// STRINGS
console.log("Este es un String");
console.log(`Este es un String`);
console.log("8"); // Esto se parsea como un String.

// Booleanos - True / False

console.log(true);
console.log(false);

//Null
console.log(null);
// se interpreta como falso

// undefined

// No son lo mismo uno es un string vacio y el otro undefinido

// let diego = undefined;
let diego = "";

console.log(diego);
console.log(typeof diego);

// Symbol

let bcn = Symbol("Barcelona");
console.log(bcn);
console.log(typeof bcn);
console.log(Symbol("Barcelona") === Symbol("Barcelona"));

// Datos no primitivos

// - Arrays - Arrays
// - Objects- Objetos

// Ejemplos

// Arrays ejemplo 1
console.log("This is my cool table of Funk Artits");
console.log("Using Just Strings");
console.table(["Daft Punk", "Anderson", "Bruno Mars", "Los amigos invisibles"]);

console.log("This is my cool table of Funk Artits");
console.log("Mix of data primitiva");
console.table(["Daft Punk", 5, false, "Los amigos invisibles"]);

// Arrays ejemplo 1
console.log("Tabla de artistas");

console.table(["Dire Straits", "The Doors", "The Weekn", "Arctic Monkeys"]);

const artist = ["Dire Straits", "The Doors", "The Weekn", "Arctic Monkeys"];
console.table(artist);

// OBJETOS

// SE inicializa con {}
// key: "value"

// Ejemplo 1
console.log("My bio");
console.table({
  firstName: "Facundo",
  lastName: "M",
  occupation: "FE - Student",
  hobbies: ["music", "Run", "trekking"],
  skills: {
    surfing: "bueno",
    run: "good",
    music: ["acustica", "criollas"],
  },
  instrumentos: {
    percusion: ["tambores", "platillos"],
  },
});

// Ejemplo 2
// array de objetos de}

const movies = [
  {
    movie: "Wolf of Wall stret",
    genre: ["Drama", "action", "comedy"],
    director: ["Scorsese"],
    location: "",
    actor: ["Leo Dicaprio", "Jonah Hill", "Margo Robbie"],
    year: 1990,
  },
  {
    movie: "Figth Club",
    genre: ["Drama", "Noir", "comedy"],
    director: ["David Fincher"],
    location: "California",
    actor: ["Bradd Pitt", "Edwad Norton"],
    year: 2000,
  },
];

console.table(movies);
console.log(movies);
console.log(movies[0].actor[2]);
console.log("My favourite actor de Wolf is " + movies[0].actor[1]);
console.table(`My favourite actor de Wolf is ${movies[0].actor[0]}`);
console.log("+++++++++++++++++++++++++++++++++++");
// EJERCICIO.

// const data = {
//   firstName: "Facundo",
//   secondName: "Moya",
//   citiesIveLived: ["cordoba", "trelew", "neuquen", "barcelona"],
//   age: 36,
//   dateOfBirth: "30 agosto de 1986",
//   drinkAlcohol: true,
// };
// console.log("Users drink alcohol: " + data.drinkAlcohol);

const libros = [
  {
    bookName: "Padre Rico Padre Pobre",
    genre: "finanzas",
    author: "Robert Kiyosaki",
    year: "1997",
    ISBN: "",
  },
  {
    bookName: "la vaca purpura",
    genre: "finanzas",
    author: "Seth Godin",
    year: "2000",
    ISBN: "",
  },
  {
    bookName: "Canción de hielo y fuego",
    genre: ["action", "drama"],
    author: "George Martin",
    year: "2018",
    ISBN: "",
  },
];

console.log(`My favourite book is ${libros[0].bookName}`);
