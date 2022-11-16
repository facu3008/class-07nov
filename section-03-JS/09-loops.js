// for LOOP

// const forLoopExample = 10;

// for (let i = 1; i <= forLoopExample; i++) {
//   console.log(`iteracion ${i} JS is legit - FOR LOOP`);
// }

// const cities = ["barcelona", "tokio", "Madrid", "Valencia"];

// for (let i = 0; i < cities.length; i++) {
//     console.log(`· ${cities[i]}`);
// }

// const mixArray = [6, 12 , "barcelona", true, "200", 7 ]
// function sum (arrayProperty){
//     let mixedSum = 0;
//     for (let i = 0; i < arrayProperty.length; i++) {
//         if (typeof arrayProperty[i] === "string"){
//             str = arrayProperty[i].split("");
//             for (let i = 0; i < str.length; i++) {
//                 mixedSum += str[i].length
//         } else if (arrayProperty[i] === true){
//             mixedSum += 1;
//         } else {
//             mixedSum += arrayProperty[i]

//         }
//     }
//     return mixedSum
// }}

const cities = ["barcelona", "tokio", "Madrid", "Valencia"];
let citiesL = cities.length;
console.log(citiesL);
let count = 0;
while (citiesL--) {
  console.log(`iteracion ${count} ${cities[count]}`);
  console.log(citiesL);
  count++;
}

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.

const arrayGlobal = ["Barcelona", "23", 23, true, null];
for (let i = 0; i < arrayGlobal.length; i++) {
  console.log(`. ${typeof arrayGlobal[i]}`);
}

// EJERCICIO - 002
// // Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").
const arrayFamous = ["messi", "jordan", "federer", "Bolt"];
let arrayFamousL = arrayFamous.length;
let count2 = 0;
while (arrayFamousL--) {
  console.log(`${arrayFamous[count2]} is the best in his sport`);
  count2++;
}
