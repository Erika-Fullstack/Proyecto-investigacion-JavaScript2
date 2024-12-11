

let numeros = [1, 2];

numeros.push(3); 
// [1, 2, 3] 

numeros.pop();
// [1, 2]

numeros.unshift(0); 
// [0, 1, 2] 
 

numeros.shift(); 
// [1, 2]


let letras = ["b", "a", "c"];

letras.sort()
console.log(letras);
// ["a", "b", "c"]


letras.splice(3, 0, 'D');
// ["a", "b", "c", "D"]

letras.splice(3, 1, "d")
// ["a", "b", "c", "d"]

letras.splice(3,0,"e","f") 
// ["a", "b", "c", "d", "e", "f"]


letras.reverse()
// ["f", "e", "d", "c", "b", "a"]




let frutas = ["Manzana", "Naranja", "Banana"]



let posicion = letras.indexOf("e"); 
// 4

