class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludo() {
      console.log(`Me llamo ${this.nombre} y tengo ${this.edad}`);
    }
  }
  
  let persona = new Persona('Jaime', 21);
  persona.saludo();