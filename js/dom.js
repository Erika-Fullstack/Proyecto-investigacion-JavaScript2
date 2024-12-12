let persona = {
    nombre: "Juan",
    edad: 30
  };

  console.log(persona.nombre); 
  // "Juan" (atributo nombre)

  console.log(persona['edad']); 
  // 30 (atributo edad)  


  let vampiro = {
    nombre: "Nandor",
    saludar: function() {
      console.log(`Yo soy ${this.nombre}`);
    }
  };
  
  vampiro.saludar(); 
  // "Yo soy Nandor"


  let listaCompra = [
    "lentejas", 
    "tomate", 
    "cebolla"
   ];

  console.log(listaCompra.length);
  // 3

  
  let elemento = listaCompra[2];
  console.log(elemento)
  // cebolla