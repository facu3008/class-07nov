// map() crea un nuevo array
// //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :)

let animales = ["perro"];

const animalesAdded = (animales) => {
  animales.push("gallina");
  animales.unshift("gato");
  return animales;
};

console.log(animalesAdded(animales));
