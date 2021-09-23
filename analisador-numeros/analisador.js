let list = []
let cad = 0 //Total numeros cadastrados
let maior = 0 //Var para maior valor
let menor = 100 //Var para menor valor
let soma = 0 //Var para soma valor
let media = 0 //Var para media valor
let res = document.getElementById('res') //Var para mensagens
let tab = document.getElementById('analis') //Var para Lista Select 


function adicionar() {
  let num = document.getElementById('txtn') //Input numero
  let n = Number(num.value)

  
  if (num.value.length == 0 || n < 1 || n > 100 || list.indexOf(n) !== -1) { //Validador do input número
    alert('Valor inválido ou já encontrado na lista.')
    num.value = '' //Limpa input numero
    
  } else {
    res.innerHTML = '' //Limpa mensagens
    list.push(n)
    cad++
    
    //Lista Select
    let item = document.createElement('option') 
    item.text = `Valor ${n} adicionado.`
    tab.appendChild(item)
    //
    
    //Calculos
    if (n > maior) maior = n
    if (n < menor) menor = n
    soma += n
    media = soma / list.length
    //

    num.value = '' //Limpa input numero
  }
}


function finalizar() {
  if (list.length == 0) { //Validador campo Select
    alert('Adicione valores antes de finalizar.')
  
  } else {
    res.innerHTML = '' //Limpa mensagens

    //Msg total numeros
    let tot = document.createElement('p')
    if (cad == 1) tot.innerHTML = `Ao todo, temos ${cad} número cadastrado`
      else tot.innerHTML = `Ao todo, temos ${cad} números cadastrados`
    res.appendChild(tot)

    //Msg maior valor
    let mai = document.createElement('p')
    mai.innerHTML = `O maior valor informado foi ${maior}.`
    res.appendChild(mai)

    //Msg menor valor
    let men = document.createElement('p')
    men.innerHTML = `O menor valor informado foi ${menor}.`
    res.appendChild(men)

    //Msg soma valor
    let som = document.createElement('p')
    som.innerHTML = `Somando todos os valores temos ${soma}.`
    res.appendChild(som)

    //Msg media valor
    let med = document.createElement('p')
    med.innerHTML = `A média dos valores digitados é ${media}.`
    res.appendChild(med)
  }
}