  let data = new Date() //Data do sistema operacional
  let anoAtual = data.getFullYear()

  let anoNasc = document.getElementById('anoNasc') //Input do ano nascimento
  let masc = document.getElementById('masc') //Input masculino
  let fem = document.getElementById('fem') //Input feminino
  let img = document.getElementById('imagem')

  let sexo = '' //Var para receber o sexo

  let msg = document.getElementById('msg') //Mensagem

  // Botao verificar
  function verificar() {
    if (anoNasc.value !== '') { //Condicao para campo nascimento vazio
      if (masc.checked || fem.checked) { //Condicao para campo sexo vazio
        
        let idade = anoAtual - Number(anoNasc.value) //Calculo da idade
        
        if (masc.checked) { //Checa se homem
          sexo = 'Homem'
          img.style.display = 'block' //Volta a mostrar a imagem
          msg.style.textAlign = 'center' //Alinha ao centro a mensagem

          if (idade < 18) {
            img.src = "./assets/h-crianca.jpeg"

          } else if (idade < 65) {
            img.src = "./assets/h-adulto.jpeg"

          } else img.src = "./assets/h-idoso.jpeg"
        }



        // if (fem.checked) sexo = 'Mulher'
    
        msg.innerText = `Detectamos ${sexo} com ${idade} anos`



      } else alert('Favor informar o sexo.')

    } else alert('Favor informar o ano de nascimento.')
  }