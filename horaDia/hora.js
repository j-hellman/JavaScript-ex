function carregar() { // funcao que sera chamada quando o body for carregado no html
  let data = new Date()
  let hora = data.getHours()

  let sds = document.getElementById('sds') //Mensagem de bom dia/tarde/noite
  let msg = document.getElementById('msg') //Mensagem das horas
  let img = document.getElementById('imagem') //Imagem 


  if (hora == 1) { //Condicao para checar hr em singular ou plural
    msg.innerHTML = `Agora é <strong>${hora} hora<strong>.`

  } else {
    msg.innerHTML = `Agora são <strong>${hora} horas<strong>.`
  }

  if (hora >= 0 && hora < 12) { //condicao para a manha
    sds.innerHTML = 'Bom Dia!'
    img.src = './assets/dia.jpg'
    window.document.body.style.background = 'rgb(255, 181, 83)'

  } else if (hora >= 12 && hora < 18) { //condicao para a tarde
    sds.innerHTML = 'Boa Tarde!'
    img.src = './assets/tarde.jpg'
    document.body.style.background = 'rgb(110, 65, 7)'

  } else { //condicao para a noite
    sds.innerHTML = 'Boa Noite!'
    img.src = './assets/noite.jpg'
    document.body.style.background = 'rgb(58, 58, 58)'
  }
}


