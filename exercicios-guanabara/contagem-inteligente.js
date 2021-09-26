// Exercicio: contagem regressiva ou progressiva de acordo com o numero inicial e final

let inicio = 0;
let fim = 8;

console.log('CONTAGEM INTELIGENTE')
console.log('--------------------')
console.log(`Início: ${inicio}`)
console.log(`Fim: ${fim}`)
console.log('--------------------')
console.log('CONTANDO')
console.log('--------------------')

if (fim > inicio)
  for (let i = inicio; i <= fim; i++) console.log(`${i}... `)
else
  for (let i = inicio; i >= fim; i--) console.log(`${i}... `)

