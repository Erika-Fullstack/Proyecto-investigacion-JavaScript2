const numeros1 = [1, 2, 3, 4, 5];
const duplicados = numeros1.map(numero => numero * 2);
console.log(duplicados);  // [2, 4, 6, 8, 10]

// Ejemplo práctico: formatear datos de usuarios
const usuarios = [
 { nombre: "Juan", edad: 25 },
 { nombre: "Ana", edad: 30 },
 { nombre: "Pedro", edad: 28 }
];

const nombresFormateados = usuarios.map(usuario => {
 return {
        nombreCompleto: usuario.nombre.toUpperCase(),
        añoNacimiento: new Date().getFullYear() - usuario.edad
 };
});

console.log(nombresFormateados);
// [
//   { nombreCompleto: "JUAN", añoNacimiento: 1999 },
//   { nombreCompleto: "ANA", añoNacimiento: 1994 },
//   { nombreCompleto: "PEDRO", añoNacimiento: 1996 }
// ]

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros2.filter(numero => numero % 2 === 0);
console.log(pares);  // [2, 4, 6, 8, 10]

// Ejemplo práctico: filtrar productos por precio
const productos = [
 { nombre: "Laptop", precio: 1200 },
 { nombre: "Teléfono", precio: 500 },
 { nombre: "Tablet", precio: 300 },
 { nombre: "Smartwatch", precio: 150 }
];

const productosEconomicos = productos.filter(producto => producto.precio < 400);
console.log(productosEconomicos);
// [
//   { nombre: "Tablet", precio: 300 },
//   { nombre: "Smartwatch", precio: 150 }
// ]

const numeros3 = [1, 2, 3, 4, 5];
const suma = numeros3.reduce((acumulador, actual) => acumulador + actual, 0);
console.log(suma);  // 15

// Ejemplo práctico: agrupar objetos por una propiedad
const ventas = [
 { producto: "Laptop", categoria: "Electrónica", monto: 1200 },
 { producto: "Café", categoria: "Alimentos", monto: 5 },
 { producto: "Tablet", categoria: "Electrónica", monto: 300 },
 { producto: "Pan", categoria: "Alimentos", monto: 3 }
];

const ventasPorCategoria = ventas.reduce((acc, venta) => {
 if (!acc[venta.categoria]) {
  acc[venta.categoria] = 0;
 }
 acc[venta.categoria] += venta.monto;
 return   acc;
}, {});

console.log(ventasPorCategoria);
// {
//   Electrónica: 1500,
//   Alimentos: 8
// }


const numeros = [1, 2, 3];
 numeros.foreach (num => console.log (num)); 
 // IMPRIME:
// 1
// 2
// 3
