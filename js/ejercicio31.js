function callback(callback) {
    callback('Hola');
  }
  
  callback(function(mensaje) {
    console.log(mensaje);
  });  