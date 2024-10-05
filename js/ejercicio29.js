function contar(palabra) {
    let vocales = 'aeiou';
    let contador = 0;
    for (let letra of palabra) {
      if (vocales.includes(letra)) {
        contador++;
      }
    }
    return contador;
  }
  console.log(contar('Puro Junior Ashe'));   