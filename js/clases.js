let fecha1 = new Date();
// console.log(now); // Muestra la fecha y hora actuales

let christmas = new Date('2024-12-25T00:00:00');
// console.log(christmas); // Wed Dec 25 2024 00:00:00 GMT+0000 (UTC)

let fecha2 = new Date('10/26/1996');
// console.log('La fecha de hoy es: ' + fecha3);

let fromTimestamp = new Date(1672444800000); 
// Milisegundos desde 01/01/1970

console.log(fromTimestamp); 
// Tue Dec 31 2023 00:00:00 GMT+0000 (UTC)

 // Funciones especiales

 let dia = fecha2.getDate();
 let mes = fecha2.getMonth();
 let anio = fecha2.getFullYear();
           
// console.log("Día: " + dia + " Mes: " + (mes+1) + " Año: " + anio);

console.log(date.getHours());    // Hora (0-23)
console.log(date.getMinutes());  // Minutos (0-59)
console.log(date.getSeconds());  // Segundos (0-59)
console.log(date.getMilliseconds()); // Milisegundos (0-999)

date.setFullYear(2025);
date.setMonth(0);    // Enero
date.setDate(15);    // Día 15
console.log(date);   // Muestra la nueva fecha ajustada

let date1 = new Date('2024-12-25');
    let date2 = new Date('2024-01-01');
                    
    console.log(date1 > date2); 
    // true (25 de diciembre es después del 1 de enero)

    console.log(date1 - date2); 
    // Diferencia en milisegundos

    let timestamp = Date.now();
    console.log(timestamp); 
    // Milisegundos desde 1970, ej. 1702438452093


    // ----------------------- CLASE MATH -----------------------------------

// No se puede hacer esto:
// let mathInstance = new Math(); // Error: Math no es un constructor
                    
// Uso correcto:
let piValue = Math.PI; 
//console.log(piValue); // 3.141592653589793

// ------------------------ Redondeo de Números -----------------------------------

 //Redondea a siguiente entero decimal .5
 let precio = Math.round(399.53);
 console.log('Precio redondeado: ', precio);
            
  //Redondear sin importar decimal hacia arriba
 let precio2 = Math.ceil(299.9);
 console.log('precio redondeado: ', precio2);
                 
 //Redondea sin importar decimal hacia abajo
 let precio3 = Math.floor(540.6)
 console.log('Precio redondeado: ',precio3);


// --------------------- Generar Números Aleatorios -------------------------------

 //Traer en pantalla un valor aleatorio
    
 let aleatorio = Math.round(Math.random()*10);
 console.log('valor aleatorio: ', aleatorio);


 // ---------------------------- Valores Absolutos Mínimos y Máximos ------------------

  //Valor absoluto
  let absoluto = -5  
  console.log(Math.abs(absoluto)); 

//Calcular valor maximo de secuencia
  let maximo = Math.max(10,50,600,1,8);
  console.log('mayor valor: ',maximo);

//Calcular valor maximo de secuencia
  let minimo = Math.min(10,50,600,1,8);
  console.log('menor valor: ',maximo);   


   // ------------------------ ARRAY -------------------------------------------

   // Instanciación 
   let arr1 = [1, 2, 3, 4, 5];
   // console.log(arr1); // [1, 2, 3, 4, 5]

// Constructor Array 

// Crea un array con 5 espacios vacíos   

let arr2 = new Array(5); 

console.log(arr2); // [ 5 empty items ]
            
let arr3 = new Array(1, 2, 3); // Crea un array con valores iniciales
console.log(arr3); // [1, 2, 3] 

// Convertir Estructura en Arrays 

  // Convierte una cadena en un array de caracteres                  
  let str = "Hola";
  let arrFromStr = Array.from(str);
  
  console.log(arrFromStr); // ['H', 'o', 'l', 'a']
    
  // Convierte un Set en un array            
  let arrFromSet = Array.from(new Set([1, 2, 2, 3]));
  
  console.log(arrFromSet); // [1, 2, 3]


  // ----------------------------- STRING ------------------------

  // Instanciación 

  let str1 = "Hola, mundo!";
  // console.log(str1); // Hola, mundo!    

  // Constructor String

    let str2 = new String("Hola, mundo!");
   // console.log(str2); // [String: 'Hola, mundo!'] 
