const add = function(x, y) {
  let result = x + y;

	return result
};

const subtract = function(x, y) {
	let result = x - y;

  return result;
};

const sum = function(x) {
  let result = 0;
  
  for (i = 0; i < x.length; i++){
    result = result + x[i];
  }

  return result;
};

const multiply = function(x) {
  const valorInicial = 1;

  const multiplieInicial = x.reduce(
    (valorPrevio, valorAtual) => valorPrevio * valorAtual,
    valorInicial
  );

  return multiplieInicial;
};

const power = function(base, potencia) {
  let result = base;

	for (i = 1; i < potencia; i++){
    result = result * base;
  }

  return result;
};

const factorial = function(x) {
  if(x===0){
    return x = 1;
  }

  for (i = x; i >= 2; i--){
    x = x * (i - 1);
  }

  return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
