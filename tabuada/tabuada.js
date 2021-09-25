
function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0)
    //Verifica campo preenchido
    alert('Impossível calcular. Favor digitar um número.')
  else {
    tab.innerHTML = '' //Limpa a tabuada 
    let n = Number(num.value)
    let radop = document.getElementsByName('radop')

    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option') //Cria dinamicamente o elemento OPTION dentro da SELECT
      
      //Calculo da tabuada
      if (radop[0].checked) 
        item.text = `${n} + ${i} = ${n + i}`
      else if (radop[1].checked)
        item.text = `${n} - ${i} = ${n - i}`
      else if (radop[2].checked) 
        item.text = `${n} * ${i} = ${n * i}`
      else item.text = `${n} / ${i} = ${n / i}`
      
      item.value = `tab${i}` //VALUE para cada option
      tab.appendChild(item) //Resultado na SELECT
    }
  }
}