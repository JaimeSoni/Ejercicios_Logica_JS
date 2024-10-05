function mayor_menor(array) {
    let mayor = Math.max(...array);
    let menor = Math.min(...array);
    return { mayor, menor };
  }
  console.log(mayor_menor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));   