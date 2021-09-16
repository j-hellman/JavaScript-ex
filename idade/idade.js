  let data = new Date() //Data do sistema operacional
  let anoAtual = data.getFullYear()

  //Inputs
  let anoNasc = document.getElementById('anoNasc')
  let masc = document.getElementById('masc') 
  let fem = document.getElementById('fem') 
  let img = document.querySelector('.imagem') 
  //

  let sexo = '' //Variavel para receber o sexo informado
  let msg = document.querySelector('.msg') //Mensagem

  // Botao verificar
  function verificar() {
    if (anoNasc.value !== '') { //Verifica campo nascimento vazio
      if (masc.checked || fem.checked) { //Verifica campo sexo vazio
        
        let idade = anoAtual - Number(anoNasc.value) //Calculo da idade
        
        img.style.display = 'block' //Volta a mostrar a imagem
        msg.style.textAlign = 'center' //Alinha msg ao centro
        
        //Se homem
        if (masc.checked) {
          sexo = 'Homem'

          if (idade < 18) {
            img.src = "./assets/h-crianca.jpeg"

          } else if (idade < 65) {
            img.src = "./assets/h-adulto.jpeg"

          } else img.src = "./assets/h-idoso.jpeg"
        }
        //

        //Se mulher
        if (fem.checked) {
          sexo = 'Mulher'
        
          if (idade < 18) {
            img.src = "./assets/m-crianca.jpeg"

          } else if (idade < 65) {
            img.src = "./assets/m-adulta.jpeg"

          } else img.src = "./assets/m-idosa.jpeg"
        }
        //
    
        //Mensagem
        msg.innerText = `Detectamos ${sexo} com ${idade} anos`

      } else alert('Favor informar o sexo.')
    } else alert('Favor informar o ano de nascimento.')
  }