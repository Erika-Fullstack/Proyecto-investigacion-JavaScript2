//que es una clase

class Persona {
    //Una clase es un molde para crear objetos
  }
  const ejemplo = new Persona();

  //que es un objeto

  class PersonaObjeto {
    constructor(nombre, apellido, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  }
  
  const persona = new PersonaObjeto("Gorka", "Pérez", 30);

  //uso de this

  class PersonaThis {
    constructor(nombre, edad) {
      this.nombre = nombre; // "this" se refiere a la instancia actual
      this.edad = edad;
    }
  
    presentarse() {
      console.log(`Me llamo ${this.nombre}`);
    }
  }
  
  const persona1 = new PersonaThis("Pedro", 30);

  //datos primitivos en clases

  class Persona {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  let p1 = new Persona("Carlos");
  let p2 = new Persona("María");
  
  p1.nombre = "Pedro";  // Cambia solo el nombre de p1

  //Uso de constructores

  class PersonaConstructor {
    constructor(nombre, edad) {
      this.nombre = nombre; // Inicializa la propiedad nombre
      this.edad = edad;     // Inicializa la propiedad edad
    }
  }
  
  const persona1 = new PersonaConstructor("Pedro", 30);

  //constructores con herencia

   // Clase base
   class Animal {
    constructor(nombre) {
      this.nombre = nombre; // Inicializa el nombre en la clase base
    }

    // Método en la clase base
    hacerSonido() 
  }

  // Clase hija que extiende de Animal
  class Perro extends Animal {
    constructor(nombre, raza) {
      super(nombre); // Llama al constructor de la clase base
      this.raza = raza; // Agrega una propiedad específica de Perro
    }

    // Método adicional en la clase hija
    ladrar() 
  }

  // Crear una instancia de Perro
  const miPerro = new Perro("Thor", "Labrador");

  miPerro.hacerSonido(); // El animal hace un sonido (método heredado)
  miPerro.ladrar();      // Thor está ladrando. (método específico de Perro)