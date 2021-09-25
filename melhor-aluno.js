// // Exercicio para pegar as notas e nomes dos alunos e informar qual aluno teve o melhor aproveitamento

let qtdAluno = 5;
let notaAluno = 0;
let nomeAluno = '';

console.log('----------------------')
console.log('ESCOLA SANTA PACIÊNCIA')
console.log('----------------------')

// Preparacao do Node para entrada de dados 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Entrada qtde alunos
rl.question('Quantos alunos a turma tem? ', (numAluno) => {
  qtdAluno = Number(numAluno)
  rl.close();
});


for (let i = 1; i <= qtdAluno; i++) { //Loop para solicitar nome e nota dos alunos com base na qtde de aluno
  
  // Entrada do nome e da nota do aluno
  rl.question(`Qual o nome do ${i}o aluno?`, (name) => {
    nomeAluno = name
  });

  rl.question(`Qual a nota do ${i}o aluno?` , (nota) => {
    notaAluno = Number(nota)
  });

  // Retorno dos dados na tela
  console.log(`ALUNO ${i}`);
  console.log(`Nome do aluno: ${nomeAluno}`);
  console.log(`Nota de ${nomeAluno}: ${notaAluno}`);
  console.log('----------------------');
}

console.log(`O melhor aproveitamento foi de ${''} com a nota ${''}`)

// CODIGO SEM A ENTRADA DE DADOS
/*
for (let id = 1; id <= numAlunos; id++) {
  
    rl.question(`Digite o nome do ${id}o aluno: `, aluno)
  
    console.log(`ALUNO ${id}`)
  console.log(`Nome do aluno: ${aluno}`)
  console.log(`Nota de ${aluno}: ${nota}`)
  console.log('----------------------')
}

console.log(`O melhor aproveitamento foi de ${aluno} com a nota ${nota}`)
*/
