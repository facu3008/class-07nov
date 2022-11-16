console.log("I'm ready!");

// Iteration 1: Names and Input

console.log("******************");
console.log("Iteration 1: Names and Input");

let hacker1 = "zepes";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Xavi";
console.log(`The navigator' name is ${hacker2}`);

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

// ### Iteration 2: Conditionals

console.log("******************");
console.log("Iteration 2: Conditionals");
console.log("");

// Condicional clásico

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

console.log("******************");
console.log("Iteration 2: TERNARIO");
// Condicional ternario

console.log("Iteracion utilizando Condicional Ternario");
console.log("");
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1.length < hacker2.length
  ? console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    )
  : console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
console.log("------------------");

// Iteration 3: Loops

// ### Iteration 3: Loops
let newDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i].toUpperCase() + " ";
  // console.log(`iteracion:  ${i}:${hacker1[i]}`);
}
console.log(newDriver);

// Usando metodo nativos

let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);

console.log("------------------");
let reverseNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  // console.log("ITERACION " + i + ":" + hacker2[i]);
  reverseNavigator += hacker2[i];
}
console.log(reverseNavigator);

console.log("------------------");
// Usando metodo nativos

let reverse = hacker2.split("").reverse().join("");
console.log(reverse);

console.log("******************");

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

if (hacker1 > hacker2) {
  console.log("`The driver's name goes first.`");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`

console.log("------------------");
// con funciones

function ordenLexicoGrafico(string1, string2) {
  if (string1 > string2) {
    console.log("`The driver's name goes first.`");
  } else if (string1 < string2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}
ordenLexicoGrafico(hacker1, hacker2);
console.log("******************");

// ### Bonus Time!

let parrafos =
  "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever";

let palabras = parrafos.split(" ").length;
console.log(palabras);

// #### Bonus 1:
// Go to [lorem ipsum generator](http://www.lipsum.com/) and:
//   - Generate 3 paragraphs. Store the text in a variable type of string.
//   - Make your program count the number of words in the string.
//   - Make your program count the number of times the Latin word [`et`](https://en.wiktionary.org/wiki/et#Latin) appears.

// #### Bonus 2:
// Create a new variable `phraseToCheck` and have it contain some string value. Write a code that will check if the value we assigned to this variable is a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Here are some examples of palindromes:
// let texto = prompt("Ingrese frase a verificar");

// let texto = "race car"
// let textoInverso = "";

// texto = texto.toLowerCase().replace(/\s/g, "");
// texto = texto.replace(/\á/g, "a");
// texto = texto.replace(/\é/g, "e");
// texto = texto.replace(/\í/g, "i");
// texto = texto.replace(/\ó/g, "o");
// texto = texto.replace(/\ú/g, "u");
// console.log(texto);

// textoInverso = texto.reverse()

// if (texto == textoInverso) {
//   console.log("El texto o palabra introducido es un palindromo");
// } else {
//   console.log("El texto o palabra introducido NO es un palindromo");
// }

// //   - "A man, a plan, a canal, Panama!"
// //   - "Amor, Roma"
// //   - "race car"
// //   - "stack cats"
// //   - "step on no pets"
// //   - "taco cat"
// //   - "put it up"
// //   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// //   __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley:

// // ## Extra Resources

// // - [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
// // - [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
// // - [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
// // - [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

// // __Happy coding!__ :heart:
