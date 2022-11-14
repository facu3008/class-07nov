// Texto comentado

console.log("Facu");

console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[8]);

// manipulacion del DOM con diferentes propiedades
console.log((document.all[8].textContent = "Wut A¡TAn"));
console.log((document.all[8].innerHTML = "Opcion 2"));
console.log((document.all[8].innerText = "Opcion 3"));
// console.log([]);
console.log(document.links);
console.log(document.images);

// Metodso de Instancia

// Tabla: console.table()
// nos muestra datos tabulares como una tabla

console.table(["Paris", " Buenos aires", "Estambul", "Nueva York"]);
console.log(["Paris", " Buenos aires", "Estambul", "Nueva York"]);
