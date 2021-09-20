//Exercicio para achar o fatorial de um numero
// 5! = 5x4x3x2x1

// function fatorial(n) {
//   let fat = 1
//   for (let c = n; c > 1; c--) {
//     fat *= c
//   }
//   return fat
// }

// console.log(fatorial(5))


//Exemplo de maneira recursiva (funcao chamando funcao)

function fatorial(n) {
  if (n == 1) 
    return 1
  else
    return n * fatorial(n-1)
}

console.log(fatorial(5))