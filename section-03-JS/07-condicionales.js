// // JS CONDICIONALES

// const number = prompt("Enter a number: ");

// if (number > 0) {
//   console.log("este numero es positivo");
// }
// console.log("Es un caso condicional que solo estamos ejecutnado una condicion");

// en casode  que la condicion inicial sea falsa aplicamo el else

// if (number > 0) {
//   console.log("este numero es positivo");
// } else {
//   console.log("este numero es negativo");
// }

// const drinkingAge = parseInt(
//   prompt("Do you want to buy beer? - let me see yur ID")
// );

// if (drinkingAge < 18) {
//   console.log("Eres menor de edad");
// } else if (drinkingAge === 18) {
//   console.log("Tienes apenas 18 años.. Que cerveza deseas?");
// } else if (drinkingAge >= 18 && drinkingAge < 40) {
//   console.log("Beber con moderacion");
// } else if (drinkingAge >= 40) {
//   console.log("Beber con moderacion que la resaca es fuerte");
// }

let agePrice = parseInt(prompt("Que edad tienes"));

if (agePrice <= 5) {
  console.log(`Tienes ${agePrice}, no debes de pagar entrada!`);
} else if (agePrice < 15 && agePrice > 5) {
  console.log(`Tienes ${agePrice}, tu entrada tiene un 20 % de descuento`);
} else if (agePrice >= 15 && agePrice <= 60) {
  console.log(`Tienes ${agePrice}, tu entrada tiene el precio regular`);
} else {
  console.log(`Tienes ${agePrice}, tu entrada tiene un 40% de descuento`);
}

// else if (agePrice <= 15 && agePrice >= 60) {
//   console.log();
// }
//  else {
//   console.log("entrada gratuita para ti");
// }
