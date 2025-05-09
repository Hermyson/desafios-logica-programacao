// desafio5-inversao-string.js

function inverterString(str) {
    let invertida = '';
  
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
  
    return invertida;
  }
  
  // Altere aqui o texto a ser invertido
  const texto = "Desafio Lógico";
  
  const resultado = inverterString(texto);
  console.log(`Texto original: ${texto}`);
  console.log(`Texto invertido: ${resultado}`);
  
  