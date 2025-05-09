// desafio3-analise-faturamento.js
const dados = require('./dados.json');

const valoresValidos = dados.map(d => d.valor).filter(v => v > 0);
const menor = Math.min(...valoresValidos);
const maior = Math.max(...valoresValidos);
const media = valoresValidos.reduce((acc, val) => acc + val, 0) / valoresValidos.length;
const acimaMedia = valoresValidos.filter(v => v > media).length;

console.log("Menor valor de faturamento:", menor.toFixed(2));
console.log("Maior valor de faturamento:", maior.toFixed(2));
console.log("Dias com faturamento acima da média:", acimaMedia);
