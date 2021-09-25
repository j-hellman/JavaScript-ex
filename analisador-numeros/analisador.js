let valores = []
let res = document.getElementById('res') //Mensagens
let lista = document.getElementById('flista') //Lista Select 

function adicionar() {
  let num = document.getElementById('fnum') //Input numero
  let n = Number(num.value)

  if (n < 1 || n > 100 || valores.indexOf(n) != -1) //Validador do input número
    alert('Valor inválido ou já encontrado na lista.')
  else {
    res.innerHTML = ''
    valores.push(n)

    //Lista Select
    let item = document.createElement('option') 
    item.text = `Valor ${n} adicionado.`
    lista.appendChild(item)
    //
  }
  num.value = ''
  num.focus() //Cursor do mouse
}

function finalizar() {
  if (valores.length == 0) //Validador campo Select
    alert('Adicione valores antes de finalizar.')
  else {
    res.innerHTML = ''

    //Total numeros
    let tot = valores.length
    if (tot == 1) 
      res.innerHTML += `<p>Ao todo temos ${tot} número cadastrado.</p>`
    else 
      res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`
    //

    //Maior, menor, soma e media dos valores
    let soma = 0
    let media = 0
    let maior = valores[0]
    let menor = valores[0]
    for (let pos in valores) {
      soma += valores[pos]
      media = soma / tot
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores temo ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    //
  }
}