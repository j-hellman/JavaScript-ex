//Exercicio para a estrutura de repeticao FOR (com variavel de controle)

// let i = 0 => initial expression
// i < 10 => condition
// i++ => increment expression

// Option1: normal
for (let i = 0; i < 5; i++)
  console.log('Hello World')

// Option2: inverse
for (let i = 5; i > 0; i--)
  console.log('Hello World')

// Option 3: odd numbers
for (let i = 0; i < 5; i++)
  if (i % 2 !== 0) console.log(i)