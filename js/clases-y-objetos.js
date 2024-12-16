//que es una clase

class Persona {
  //Una clase es un molde para crear objetos
  //La clase no crea nada por sí sola.Necesitas instanciar para crear objetos.
}
const ejemplo = new Persona();


//Uso de constructores

class PersonaConstructor {
  constructor(nombre, edad) {
    this.nombre = nombre; // Inicializa la propiedad nombre
    this.edad = edad;     // Inicializa la propiedad edad
  }
}

const personaUser = new PersonaConstructor("Pedro", 30);

//uso de this

class PersonaThis {
  constructor(nombre, edad) {
    this.nombre = nombre; // "this" se refiere a la instancia actual
    this.edad = edad;
  }

  presentarse() {
    console.log(`Me llamo ${this.nombre}`); //Accede a la propiedad "nombre" de la instancia
  }
}

const persona1 = new PersonaThis("Pedro", 30);
persona1.presentarse(); // Me llamo Pedro


//constructores con herencia

// Clase base
class Animal {
  constructor(nombre) {
    this.nombre = nombre; // Inicializa el nombre en la clase base
  }

  // Método en la clase base
  hacerSonido() { console.log("El animal hace un sonido"); }

}

// Clase hija que extiende de Animal
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase base
    this.raza = raza; // Agrega una propiedad específica de Perro
  }

  // Método adicional en la clase hija
  ladrar() { console.log(`${this.nombre} está ladrando.`); }

}

// Crear una instancia de Perro
const miPerro = new Perro("Thor", "Labrador");

miPerro.hacerSonido(); // El animal hace un sonido (método heredado)
miPerro.ladrar();      // Thor está ladrando. (método específico de Perro)
