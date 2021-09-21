
let inicio = document.getElementById('txtinicio')
let fim = document.getElementById('txtfim')
let passo = document.getElementById('txtpasso')
let btn = document.querySelector('button')
let res = document.getElementById('res')
let total = []

//Emojis
let emojis = [
  128073, //mao 
  127937 //bandeira
]
//

// Botao contar
function contar() {
  for(let soma = Number(inicio.value); soma <= fim.value; soma += Number(passo.value)) {
    total.push(soma)
    total.push(String.fromCodePoint(emojis[0])) //Emoji mao
  }
  
  total.push(String.fromCodePoint(emojis[1])) //Emoji bandeira
  res.innerHTML = '<p>Contando: </p>'
  res.innerHTML += total.join('') //Mostra o resultado do array sem as vírgulas
}


// Botao zerar
function zerar() {
  inicio.value = ''
  fim.value = ''
  passo.value = ''
  res.innerHTML = '<p>Preparando a contagem...</p>'
}