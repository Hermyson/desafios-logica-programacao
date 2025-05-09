// desafio2-fibonacci.js
function pertenceAFibonacci(numero) {
    let a = 0, b = 1;
  
    while (b < numero) {
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    return numero === 0 || numero === 1 || b === numero;
  }
  
  // Altere o número aqui para testar
  const numero = 22;
  
  if (pertenceAFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} Não pertence à sequência de Fibonacci.`);
  }
  