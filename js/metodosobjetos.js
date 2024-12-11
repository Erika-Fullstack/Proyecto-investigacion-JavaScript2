/* .keys() */
let persona = { nombre: "Juan", edad: 25 };
console.log(Object.keys(persona)); // ["nombre", "edad"]

/* .values() */
let persona2 = { nombre: "Juan", edad: 25 };
console.log(Object.values(persona2)); // ["Juan", 25]

/* .entries() */
let persona3 = { nombre: "Juan", edad: 25 };
console.log(Object.entries(persona3));
// [["nombre", "Juan"], ["edad", 25]]

/* .assign() */
let destino = {};
let origen = { a: 1 };
Object.assign(destino, origen);
console.log(destino); // { a: 1 }

/* .freeze() */
const persona4 = {
  nombre: "Ana",
  contactos: {
    telefono: "1234567890",
    email: "ana@example.com",
  },
};

Object.freeze(persona4);

persona4.contactos.email = "ana@newmail.com";
console.log(persona4.contactos.email);

/* .hasOwnProperty(key) */
let persona5 = { nombre: "Juan" };
console.log(persona5.hasOwnProperty("nombre")); // true

/* for...in */
let persona6 = {
  nombre: "Juan",
  edad: 25,
};
for (let clave in persona6) {
  console.log(`${clave}: ${persona6[clave]}`);
}
// nombre: Juan // edad: 25

let objeto = {
  clave: "valor",
  clave: valor,
  clave: { clave: valor },
  metodo: function () {
    //codigo
  },
};
