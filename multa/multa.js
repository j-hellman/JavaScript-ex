let txtVelMax = document.getElementById('txtVelMax')
let txtVel = document.getElementById('txtVel')
let res = document.querySelector('p.res')

function calcular() {
  let velMax = Number(txtVelMax.value)
  let vel = Number(txtVel.value)

  if (velMax !== 0 && vel !== 0) { //Checar se os campos estao preenchidos
    if (vel > velMax) {
      res.innerHTML = `A velocidade maxima é de ${velMax}km/h. `
      res.innerHTML += `Sua velocidade é de ${vel}km/h. <span>Você foi multado!</span>`
    } else
      res.innerHTML = ' Dirija com segurança. Use o cinto.'
  } else
    res.innerHTML = 'Favor preencher os campos.'
}

function limpar() { //Funcao para limpar campos apos consulta realizada
  txtVelMax.value = ''
  txtVel.value = ''
  res.innerText = ''
}
