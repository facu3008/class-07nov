console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "pepe";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Xavi";
console.log(`The navigator' name is ${hacker2}`);

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

// ### Iteration 2: Conditionals
if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${str.hacker1} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Lengthclea} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2Length} characters!`
  );
}

// Iteration 3: Loops

// ### Iteration 3: Loops
let newDriver = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver);
let newNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  console.log("ITERACION " + i + ":" + hacker2[i]);
  newNavigator += hacker2[i];
}
console.log(newNavigator);

//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>
//     - `The driver's name goes first.` <br>
//     - `Yo, the navigator goes first definitely.` <br>
//     - `What?! You both have the same name?`

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
//   - "A man, a plan, a canal, Panama!"
//   - "Amor, Roma"
//   - "race car"
//   - "stack cats"
//   - "step on no pets"
//   - "taco cat"
//   - "put it up"
//   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".

//   __Hint__: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as _join()_, _reverse()_, etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using `for` loop, `if-else` statements with some `break` and `continue`... Just sayin' :smiley:

// ## Extra Resources

// - [String - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
// - [if - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
// - [while - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
// - [for - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

// __Happy coding!__ :heart:
