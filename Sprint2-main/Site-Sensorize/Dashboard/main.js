function gerarDadosAleatorios(tamanho) {
  const dados = []
  for (let i = 0; i < tamanho; i++) {
    const dadoAleatorio = parseFloat(
      (Math.random() * (15 - 2.5) + 2.5).toFixed(2)
    )
    dados.push(dadoAleatorio)
  }
  return dados
}

var dado_inferior = gerarDadosAleatorios(4)
var dado_superior = gerarDadosAleatorios(4)
var dado_cardio = gerarDadosAleatorios(4)
var soma_inferior = 0
var soma_superior = 0
var soma_cardio = 0
var comp = []

for (var contador = 0; contador < 4; contador++) {
  soma_inferior += dado_inferior[contador]
  soma_superior += dado_superior[contador]
  soma_cardio += dado_cardio[contador]
}

comp = [soma_inferior, soma_superior, soma_cardio]
var maiorValor = Math.max(...comp)

var categoria = ''
var cor = ''

var dado4 = []
if (maiorValor == soma_inferior) {
  categoria = 'Inferior'
  cor = 'red'
  dado4 = dado_inferior.slice()
} else if (maiorValor == soma_superior) {
  categoria = 'Superior'
  cor = 'blue'
  dado4 = dado_superior.slice()
} else if (maiorValor == soma_cardio) {
  categoria = 'Cárdio'
  cor = 'black'
  dado4 = dado_cardio.slice()
}

console.log('Dado4:', dado4)

const labels = ['06h as 10h', '10h as 14h', '14h as 18h', '18h as 22h']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Inferior',
      backgroundColor: 'red',
      borderColor: 'rgb(255,99,132)',
      data: dado_inferior
    },
    {
      label: 'Superior',
      backgroundColor: 'blue',
      borderColor: 'rgb(255,99,132)',
      data: dado_superior
    },
    {
      label: 'Cárdio',
      backgroundColor: 'black',
      borderColor: 'rgb(255,99,132)',
      data: dado_cardio
    }
  ]
}

const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Grupo de Treino'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Horários do Dia'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Total de Horas de Uso'
        }
      }
    }
  }
}

const labels2 = ['06h as 10h', '10h as 14h', '14h as 18h', '18h as 22h']

const data2 = {
  labels: labels,
  datasets: [
    {
      label: `${categoria}`,
      backgroundColor: `${cor}`,
      borderColor: `${cor}`,
      data: dado4
    }
  ]
}

const config2 = {
  type: 'line',
  data: data2,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Grupo de Treino'
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Horários do Dia'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Total de Horas de Uso'
        }
      }
    }
  }
}
