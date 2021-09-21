let inicio = document.getElementById('txtinicio')
let fim = document.getElementById('txtfim')
let passo = document.getElementById('txtpasso')
let res = document.getElementById('res')

// Botao contar
function contar() {
  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { 
    //Checagem campos INICIO e FIM
    res.innerHTML = 'Impossível contar!'

  } else {
    res.innerHTML = 'Contando: <br/>'

    if (Number(passo.value <= 0)) { 
      //Checagem campo PASSO
      alert('Passo inválido! Considerando PASSO: 1')
      passo.value = 1
    }
    
    if (Number(inicio.value) < Number(fim.value)) {
      //Contagem crescente
      for(let soma = Number(inicio.value); soma <= fim.value; soma += Number(passo.value)) {
        res.innerHTML += ` ${soma} \u{1F449}` //Emoji
      }

    } else { //Condicao para INICIO > FIM
      for(let soma = Number(inicio.value); soma >= fim.value; soma -= Number(passo.value)) {
        res.innerHTML += ` ${soma} \u{1F449}` //Emoji
      }
    }
    res.innerHTML += `\u{1F3C1}` //Emoji bandeira
  }
}

// Botao zerar
function zerar() {
  inicio.value = ''
  fim.value = ''
  passo.value = ''
  res.innerHTML = 'Preparando a contagem...'
}