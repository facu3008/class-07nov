// const createElement = document.createElement("div");
// console.log("create element tiene esta estructura: ");
// console.log(createElement);

// createElement.innerText = " JS es demasiado coolEE";
// console.log(createElement);

//  Anexamos al html desde js
// Un solo selector
// let parentElement = document
//   .querySelector("#parent")
//   .appendChild(createElement);

// // Version aniddade
// let parentElement2 = document
//   .querySelector("#parent #firstchild")
//   .appendChild(createElement);

// createElement.className = "ejemplo1";

// Osea, primero creamos un tipo de elemento.
// Luego con appendChild  y query selector se agrega al html

// EJERCICIO 1:
const createDiv = document.createElement("div");
createDiv.id = "insert-p";
console.log(createDiv);

const createP = document.createElement("p");
console.log(createP);
// document.querySelector("#insert-p").appendChild(createP);
// document.getElementById("insert-p").appendChild(createP);
