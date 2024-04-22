const calculator = [
 (number1, number2) => number1 + number2,
 (number1, number2) => number1 - number2,
 (number1, number2) => number1 * number2,
 (number1, number2) => number1 / number2,
 (number1, number2) => Math.pow(number1, number2)
]

function calcular(event) {
  event.preventDefault()

  const select = document.querySelector('select')
  const inputs = document.querySelectorAll('input')

  const values = []
  inputs.forEach(input => values.push(Number(input.value)))

  const calculo = calculator[select.value - 1]
  const resposta = document.querySelector('#resposta')

  if (calculo) {
    const resultadoFinal = calculo(...values)
    resposta.innerHTML = resultadoFinal
  }
} 
