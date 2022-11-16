console.log("Funciona");

// FUNCION SIMPRE

function saludar() {
  console.log(`Hola `);
}
saludar();

// FUNCION CON PARAMETROS
function saludarParametros(nombre) {
  console.log(`Hola ${nombre}`);
}
saludarParametros("Carlos");

function sayParameters(nombre) {
  console.log(`Hola ${nombre} de paremtro`);
}
let userName = prompt("Indica tu nombre");
sayParameters(userName);

// No confundir el parametro con el argumento. El argumento va cuando se llama a la funcion.
// El parametro va cuando se declara la funcion

// Cuando utilizamos el return dentro de una funcion no es necesario invocarla!!!

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));

function ejercicio1(name, age, livesIn) {
  if (livesIn.livesInCity === true) {
    return `Tu nombres es ${name}, tu edad es ${age} anyos y vives en la ciudad`;
  } else {
    return `Tu nombres es ${name}, tu edad es ${age} anyos y vives en el pueblo`;
  }
}
console.log(ejercicio1("Facu", 36, { livesInCity: false, livesInTown: true }));

// Aca va lo mism pero con Ternario

const ejercicio2 = (name, age, livesIn) =>
  livesIn.livesInCity
    ? `Tu nombres es ${name}, tu edad es ${age} anyos y vives en la ciudad`
    : `Tu nombres es ${name}, tu edad es ${age} anyos y vives en el pueblo`;

console.log(
  ejercicio2("Martina", 42, { livesInCity: false, livesInTown: true })
);

// Aca va lo mism pero con SWITCH

// const ejercicio3 = (name, age, livesIn) => {

//     let tCity

//     switch
// }
