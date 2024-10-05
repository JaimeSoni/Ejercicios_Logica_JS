let calculadora = {
    suma: function(a, b) {
      return a + b;
    },
    resta: function(a, b) {
      return a - b;
    },
    multiplicacion: function(a, b) {
      return a * b;
    },
    division: function(a, b) {
      return b !== 0 ? a / b : 'Te va a dar cero';
    }
  };
  
  console.log(calculadora.division (10, 0)); 