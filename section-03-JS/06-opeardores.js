// Que es un operador?

// En JS, un operador es un symbolo especial que nos ayuda a ejecutar operaciones en operandos.
// Ejemplo:

const add = 2 + 3;
console.log(add);

// Aca cicos, el operador "+" es un symbolo matematico de operacion.  Caso de suma que te suma 2+3

// JS Tipo de Operadores
// Lista que aprenderemos hoy

// Assignment Operator
// Arithemic Operator
// Copmarison Operator
// Logical Operators
// Bitwise Operators
// String Operators
// Other Operators

// JS Assignment Operators
// Si miramos el ejemplo en la linea 6, el operador de asignacion "=" es lo que usamos para apuntar/asignar la operacion matematica con la variable "add"...

console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);

// JS Aritmetichal Operators
// (+ - * /) ++ incrementa -- decrement ** exponencial

let as = 2;
console.log(a++);

// JS Comparison Operators . Retorna valor booleano
let number1 = 3;
let number2 = 2;

console.log(number1 > number2);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++");

let numero;
let str;
numero = 8;
str = "8";

console.log("comparacion:", numero == str);
console.log("comparacion:", numero === str);

let ageNumber = 19;
console.log("comparacion:", ageNumber > 18);
console.log("comparacion:", ageNumber < 18);
console.log("comparacion:", ageNumber >= 18);
console.log("comparacion:", str > 18);
console.log("comparacion:", str < 18);
console.log("comparacion:", str >= 18);

if (ageNumber > 19) {
  console.log(`Sos mayor de 18 a??os. Tu edas es ${ageNumber} a??os`);
} else if (ageNumber < 18) {
  console.log(`sos menor de 18 a??os. Tu edad es ${ageNumber} a??os`);
} else {
  console.log(`tu edad es ${ageNumber} a??os`);
}
