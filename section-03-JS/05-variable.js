let a = "hola";
let _a = "hola";
let $a = "hola";

console.log(a, _a, $a);

// case sensitive

let facu = "Probando";
let Facu = "segunda prueba";

console.log(facu);
console.log(Facu);

// hay palabras reservadas que no se pueden utilizar al crear variables
// usar palabras o nombres descriptivos a nuestras variables
// siempre usar convencion de nomenclatura camelCase

// syntax -var
var nombre = "Facu";
console.log(nombre);
nombre = "diego";
console.log(nombre);

// syntax - let
let comida = "sandia";
console.log(comida);
comida = "locro";
console.log(comida);

// syntax - const
// No se puede reasignar
// debe siempre inicializarse
const casa = "";
console.log(casa);

console.log("************************");
console.log("************************");
console.log("************************");
console.log("************************");

const isTrue = false;
console.log(isTrue);

let name = "Facundo";
let surname = "Moya";
let age = 36;

let hobbie = "escalada";
console.log(
  `Hola mi nombre es ${name} ${surname}, tengo ${age} y mi hobbie es ${hobbie}`
);
hobbie = "bucear";
console.log(
  `Hola mi nombre es ${name} ${surname}, tengo ${age} y mi hobbie es ${hobbie}`
);
hobbie = "andar a caballo ";
console.log(
  `Hola mi nombre es ${name} ${surname}, tengo ${age} y mi hobbie es ${hobbie}`
);
hobbie = "descubrir ciudades ";
console.log(
  `Hola mi nombre es ${name} ${surname}, tengo ${age} y mi hobbie es ${hobbie}`
);
hobbie = "probar comidas de diferentes culturas ";
console.log(
  `Hola mi nombre es ${name} ${surname}, tengo ${age} y mi hobbie es ${hobbie}`
);

const data = {
  firstName: "Facundo",
  secondName: "Moya",
  citiesIveLived: ["cordoba", "trelew", "neuquen", "barcelona"],
  age: 36,
  dateOfBirth: "30 agosto de 1986",
  drinkAlcohol: true,
  hobbye: ["correr", "saltar", "nadar"],
};
console.log(`Hola mi hobby es ${data.hobbye[2]}`);
