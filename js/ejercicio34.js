class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

    saludo() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad}`);
      }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }
  
    Grado() {
      console.log(`Estoy en: ${this.grado} cuatrimestre`);
    }
  }
  
  let estudiante = new Estudiante('Jaime', 21, 'Decimo');
  estudiante.saludo();
  estudiante.Grado();
  