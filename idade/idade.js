  let data = new Date() //Data do sistema operacional
  let anoAtual = data.getFullYear()

  let anoNasc = document.getElementById('anoNasc') //Ano nascimento
  let msg = document.querySelector('.msg') //Mensagem

  // Botao verificar
  function verificar() {
    if (anoNasc.value.length < 4 || anoNasc.value > anoAtual) //Verifica campo nascimento vazio
      alert('[ERRO]: Verifique os dados e tente novamente.')
    
    else {
      let idade = anoAtual - Number(anoNasc.value) //Calculo da idade
      let fsex = document.getElementsByName('radsex') //Input radio
      let genero = '' //Variavel para receber o sexo informado

      //Imagem dinamica
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      //
          
      if (fsex[0].checked) { //Homem
        genero = 'Homem'

        if (idade < 18) 
          img.setAttribute('src', './assets/h-crianca.jpeg')
        else if (idade < 65)
          img.setAttribute('src', './assets/h-adulto.jpeg')
        else img.setAttribute('src', './assets/h-idoso.jpeg')

      } else if (fsex[1].checked) { //Mulher
        genero = 'Mulher'
      
        if (idade < 18)
          img.setAttribute('src', './assets/m-crianca.jpeg')
        else if (idade < 65)
          img.setAttribute('src', './assets/m-adulta.jpeg')
        else img.setAttribute('src', './assets/m-idosa.jpeg')
      }
  
      //Mensagem
      msg.style.textAlign = 'center' //Alinha msg ao centro
      msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      msg.appendChild(img)
    }
  }