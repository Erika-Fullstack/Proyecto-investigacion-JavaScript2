let numeros = [1, 2, 3]; 
let letras = ["b", "a", "c"]; 
let frutas = ["manzana", "banana", "naranja"];
let frutas2 = ["banana", "uva"];

let letras = ["b", "a", "c"]; 
letras.sort();
// ["a", "b", "c"]


/* .length 
console.log(numeros.length); 
// 3

/* .push() 
numeros.push(3); 
// [1, 2, 3] 

/* .unshift() 
numeros2.unshift(1); 
// [1, 2, 3]

/* .shift() 
numeros.shift(); 
// [2, 3]

/* .sort() 
console.log(letras.sort());
// ["a", "b", "c"]

/* .reverse() 
numeros.reverse(); 
// [3, 2, 1]

/* .slice() 
let seleccion = frutas.slice(0, 2);
// ["manzana", "banana"]

/* .concat() 
let todas = frutas1.concat(frutas2);
// ["manzana", "banana", "banana", "uva"]

/* .splice(indice, borrar, añade elemento) */

frutas = ["manzana", "banana", "naranja"];

frutas.splice(2, 0, "Limón", "Kiwi"); 
// En la posicion 2 donde está "banana", 
// 0 borrados, añade "Limón" and "Kiwi"
// [ "manzana", "banana", "Limón", "Kiwi", "naranja" ]

seleccion = frutas.splice(2, 2); 
// En la posicion 2 borra 2 elementos.
console.log(seleccion)  // nos devuelve un array con lo borrado
// ["Limón", "Kiwi"]


/* .lastIndexof() */
frutas2 = ["manzana", "banana", "banana", "naranja"];
frutas2.lastIndexOf("banana"); 
// 2


/* .includes() 

frutas2.includes("banana"); 
// true
*/