
function contar() {
  let inicio = document.getElementById('txtinicio')
  let fim = document.getElementById('txtfim')
  let passo = document.getElementById('txtpasso')
  let res = document.getElementById('res')
  let total = []

  //Emojis
  let emojis = [
    128073, //mao 
    127937 //bandeira
  ]
  //

  for(let soma = Number(inicio.value); soma <= fim.value; soma += Number(passo.value)) {
    total.push(soma)
    total.push(String.fromCodePoint(emojis[0])) //Emoji mao
  }
  
  total.push(String.fromCodePoint(emojis[1])) //Emoji bandeira
  res.innerHTML = 'Contando: <br />'
  res.innerHTML += total
}