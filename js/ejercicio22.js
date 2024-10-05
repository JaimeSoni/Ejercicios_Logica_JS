let array = [10, 20, 30, 40, 50];
let buscar = 100;
let posicion = array.indexOf(buscar);

if (posicion !== -1) {
  console.log(`El valor ${buscar} esta en la posición ${posicion}.`);
} else {
  console.log('No esta dentro de los valores ingresados');
}