/* .length */
let numeros = [1, 2, 3]; 
console.log(numeros.length); // 3

/* .push() */
let numeros1 = [1, 2]; 
numeros1.push(3); // [1, 2, 3] 

/* .unshift() */
let numeros2 = [2, 3]; 
numeros2.unshift(1); // [1, 2, 3]

/* .shift() */
let numeros3 = [1, 2, 3] 
numeros3.shift(); // [2, 3]

/* .sort() */
let letras = ["b", "a", "c"]; 
console.log(letras.sort()); // ["a", "b", "c"]

/* .reverse() */
let numeros4 = [1, 2, 3]; 
console.log(numeros4.reverse()); // [3, 2, 1]

/* .map() */
let numeros5 = [1, 2, 3]; 
console.log(numeros5.map(x => x * 2)); // [2, 4, 6]

/* .filter() */
let numeros6 = [1, 2, 3, 4]; 
console.log(numeros6.filter(x => x % 2 === 0)); // [2, 4]

/* .reduce() */
let numeros7 = [1, 2, 3]; 
console.log(numeros7.reduce((acc, x) => acc + x, 0)); // 6

/* .includes() */
let numeros8 = [1, 2, 3]; 
console.log(numeros8.includes(2)); // true