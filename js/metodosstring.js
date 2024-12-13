/* .length */
let texto = "Hola Mundo"; 
//console.log(texto.length);  10

/* .toUpperCase() */
let texto1 = "Hola"; 
//console.log(texto1.toUpperCase());  "HOLA" 

/* .toLowerCase() */
let texto2 = "Hola"; 
//console.log(texto2.toLowerCase());  "hola"

/* .trim() */
let texto3 = " Hola "; 
// console.log(texto3.trim()); "Hola"

/* .indexOf */
let texto4 = "Hola Mundo"; 
//console.log(texto4.indexOf("Mundo"));  5 

/* includes */
//console.log("Hola Mundo".includes("Mundo"));  true

/* startsWith(searchValue, start) */
let cadena = "Hola, mundo";
let cadenaDeBusqueda = "mundo";
let resultado = cadena.startsWith(cadenaDeBusqueda, 7);
// console.log(resultado); Imprime: true

/* lastIndexOf() */
const parrafo = "El rápido zorro marrón salta sobre el perro perezoso.";
const ultimaPosicion = parrafo.lastIndexOf("el");
//console.log(ultimaPosicion);  Imprimirá: 31

/* .replace(searchValue, newValue) */
let texto5 = "Hola Mundo"; 
// console.log(texto5.replace("Mundo", "Amigo")); "Hola Amigo"

/* split(separator) */
let texto6 = "Hola,Mundo"; 
// console.log(texto6.split(",")); ["Hola", "Mundo"]

/* .charAt(index) */
let texto7 = "hola"; 
//console.log(texto7.charAt(1));  "o"

/* [index] */
let texto8 = "hola"; 
//console.log(texto8[1]);  "o"