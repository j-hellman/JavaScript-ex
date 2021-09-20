
// let altura = document.getElementById('txtAlt')
// let peso = document.getElementById('txtPes')
// let imc = document.getElementById('imc')

// function calcular(){
//   imc = Number(peso.value) / Number((altura.value ** 2))
//   imc.innerText = `O seu IMC é de: ${imc}.`
// }

let altura = 1.82;
let peso = 64;
let imc = 40//(peso / (altura ** 2)).toFixed(2)

console.log(`Seu IMC é de: ${imc}`)
if (imc < 17)
  console.log('Extremo cuidado! Muito abaixo do peso')
else if (imc < 18.5)
  console.log('Cuidado! Abaixo do peso')
else if (imc < 25)
  console.log('Parabéns! Peso ideal.')
else if (imc < 30)
  console.log('Cuidado! Sobrepeso.')
else if (imc < 35)
  console.log('Cuidado! Obesidade.')
else if (imc < 40)
  console.log('Extremo cuidado! Obesidade Severa.')
else
  console.log('Extremo cuidado! Obesidade Mórbida.')