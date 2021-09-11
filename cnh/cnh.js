// Exercicio para mostrar se esta apto ou nao para tirar a carteira

let data = new Date()
let anoAtual = data.getFullYear() 

let anoNasc = document.getElementById('nasc')
let res = document.querySelector('.msgRes')

document.querySelector('.msgAno').innerHTML = `<strong>${anoAtual}<strong>` // Mostra o ano atual automaticamente

function checar() {
  if (anoNasc.value !== '') { //Checa se campo nascimento foi preenchido
    let idade = anoAtual - Number(anoNasc.value) //Calculo da idade atual do motorista
    document.querySelector('.msgId').innerHTML = `${idade} anos`
    
    idade < 18 //Condicao para Apto ou Inapto
      ? res.innerHTML = 'INAPTO a tirar a carteira de motorista'
      : res.innerHTML = '<strong>APTO a tirar a carteira de motorista<strong>'

  } else
    res.innerHTML = '<strong>Favor informar o ano de nascimento <strong>'
}




