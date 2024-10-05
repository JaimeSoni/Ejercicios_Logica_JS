function promedio(array) {
    let suma = array.reduce((acc, num) => acc + num, 0);
    return suma / array.length;
  }
  console.log(promedio([10, 8, 9, 10, 7]));   