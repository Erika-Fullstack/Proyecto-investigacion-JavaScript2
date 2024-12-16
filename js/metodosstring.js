/* .length */
let texto = "Hola Mundo"; 
//console.log(texto.length);  10

/* .toUpperCase() */
texto = "Hola Mundo"; 
//console.log(texto.toUpperCase());  "HOLA MUNDO" 

/* .toLowerCase() */
texto = "Hola Mundo"; 
//console.log(texto.toLowerCase());  "hola mundo"

/* .trim() */
texto = "  Hola  Mundo  "; 
// console.log(texto.trim()); "Hola Mundo"

/* .indexOf */
texto = "Hola Mundo"; 
//console.log(texto.indexOf("Mundo"));  5 

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
//console.log(ultimaPosicion);  Imprimirá: 35

/* .replace(searchValue, newValue) */
texto = "Hola Mundo"; 
// console.log(texto.replace("Mundo", "Amigo")); "Hola Amigo"

/* split(separator) */
texto = "Hola,Mundo"; 
// console.log(texto.split(",")); ["Hola", "Mundo"]

/* .capitalize() */
const nombre = "juan";
const nombreCapitalizado = capitalize(nombre);
// console.log(nombreCapitalizado); Imprimirá: "Juan"

/* [index] */
texto = "Hola Mundo"; 
//console.log(texto[1]);  "o"