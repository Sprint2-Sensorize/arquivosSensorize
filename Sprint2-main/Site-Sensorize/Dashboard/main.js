function mostrar_perfil() {
  tela_aparelho.style.display = 'none'
  tela_principal.style.display = 'none'
  tela_perfil.style.display = 'flex'
}
function mostrar_aparelhos() {
  tela_aparelho.style.display = 'flex'
  tela_principal.style.display = 'none'
  tela_perfil.style.display = 'none'
}
function mostrar_principal() {
  tela_aparelho.style.display = 'none'
  tela_principal.style.display = 'flex'
  tela_perfil.style.display = 'none'
}
function mostrar_superior() {
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Filtrar Aparelhos para Treino de Membros Superiores`
  aparelho_superior.style.display = 'block'
  aparelho_infeior.style.display = 'none'
  aparelho_cardio.style.display = 'none'
  atualizarGrafico(myChart6, gerarDadosAleatorios(8, 2, 0.5))
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  myChart6.data.datasets[0].backgroundColor = 'blue'
  myChart6.data.datasets[0].borderColor = 'blue'
  myChart7.data.datasets[0].backgroundColor = 'blue'
  myChart7.data.datasets[0].borderColor = 'blue'
  myChart6.update()
  myChart7.update()
}
function mostrar_inferior() {
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Filtrar Aparelhos para Treino de Membros Inferiores`
  aparelho_infeior.style.display = 'block'
  aparelho_cardio.style.display = 'none'
  aparelho_superior.style.display = 'none'
  atualizarGrafico(myChart6, gerarDadosAleatorios(8, 2, 0.5))
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  myChart6.data.datasets[0].backgroundColor = 'purple'
  myChart6.data.datasets[0].borderColor = 'purple'
  myChart7.data.datasets[0].backgroundColor = 'purple'
  myChart7.data.datasets[0].borderColor = 'purple'
  myChart6.update()
  myChart7.update()
}
function mostrar_cardio() {
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Filtrar Aparelhos para Treino Cardiovascular`
  aparelho_cardio.style.display = 'block'
  aparelho_superior.style.display = 'none'
  aparelho_infeior.style.display = 'none'
  atualizarGrafico(myChart6, gerarDadosAleatorios(8, 2, 0.5))
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  myChart6.data.datasets[0].backgroundColor = 'black'
  myChart6.data.datasets[0].borderColor = 'black'
  myChart7.data.datasets[0].backgroundColor = 'black'
  myChart7.data.datasets[0].borderColor = 'black'
  myChart6.update()
  myChart7.update()
}

function atualizarGrafico(chart, newData) {
  chart.data.datasets[0].data = [0, ...newData]
  chart.update()
}

/* submenu function */
function toggleSublinks() {
  const submenu = document.querySelector('.submenu')
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'
}

function gerarDadosAleatorios(tamanho, comeco, fim) {
  const dados = []
  for (let i = 0; i < tamanho; i++) {
    const dadoAleatorio = parseFloat(
      (Math.random() * (fim - comeco) + comeco).toFixed(2)
    )
    dados.push(dadoAleatorio)
  }
  return dados
}

var dado_inferior = gerarDadosAleatorios(4, 15, 2.5)
var dado_superior = gerarDadosAleatorios(4, 15, 2.5)
var dado_cardio = gerarDadosAleatorios(4, 15, 2.5)
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
var menorValor = Math.min(...comp)

var primeiroNumero = gerarDadosAleatorios(1, 20, 60)[0]
var segundoNumero = 100 - primeiroNumero

var dado5 = [primeiroNumero, segundoNumero]
var dado6 = [primeiroNumero, segundoNumero]
var dado7 = [primeiroNumero, segundoNumero]

var categoria = ''
var cor = ''

var dado4 = []
if (maiorValor == soma_inferior) {
  var primeiroNumero = gerarDadosAleatorios(1, 60, 90)[0]
  var segundoNumero = 100 - primeiroNumero
  dado5 = [primeiroNumero, segundoNumero]
  categoria = 'Inferior'
  cor = 'purple'
  dado4 = dado_inferior.slice()
} else if (maiorValor == soma_superior) {
  var primeiroNumero = gerarDadosAleatorios(1, 60, 90)[0]
  var segundoNumero = 100 - primeiroNumero
  dado6 = [primeiroNumero, segundoNumero]
  categoria = 'Superior'
  cor = 'blue'
  dado4 = dado_superior.slice()
} else if (maiorValor == soma_cardio) {
  var primeiroNumero = gerarDadosAleatorios(1, 60, 90)[0]
  var segundoNumero = 100 - primeiroNumero
  dado7 = [primeiroNumero, segundoNumero]
  categoria = 'Cárdio'
  cor = 'black'
  dado4 = dado_cardio.slice()
}
if (menorValor == soma_inferior) {
  var primeiroNumero = gerarDadosAleatorios(1, 8, 20)[0]
  var segundoNumero = 100 - primeiroNumero
  dado5 = [primeiroNumero, segundoNumero]
} else if (menorValor == soma_superior) {
  var primeiroNumero = gerarDadosAleatorios(1, 8, 20)[0]
  var segundoNumero = 100 - primeiroNumero
  dado6 = [primeiroNumero, segundoNumero]
} else if (menorValor == soma_cardio) {
  var primeiroNumero = gerarDadosAleatorios(1, 8, 20)[0]
  var segundoNumero = 100 - primeiroNumero
  dado7 = [primeiroNumero, segundoNumero]
}

var cor1 = ''
var cor2 = ''
var cor3 = ''
if (dado5[0] < 30) {
  cor1 = 'green'
} else if (dado5[0] < 75) {
  cor1 = 'orange'
} else {
  cor1 = 'red'
}
if (dado6[0] < 30) {
  cor2 = 'green'
} else if (dado6[0] < 75) {
  cor2 = 'orange'
} else {
  cor2 = 'red'
}
if (dado7[0] < 30) {
  cor3 = 'green'
} else if (dado7[0] < 75) {
  cor3 = 'orange'
} else {
  cor3 = 'red'
}

const labels = ['06h as 10h', '10h as 14h', '14h as 18h', '18h as 22h']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Inferior',
      backgroundColor: 'purple',
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

const data2 = {
  labels: labels,
  datasets: [
    {
      label: categoria,
      backgroundColor: cor,
      borderColor: cor,
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

const data3 = {
  labels: ['Grupo Inferior'],
  datasets: [
    {
      label: 'My First Dataset',
      data: dado5,
      backgroundColor: [cor1, '#ded9d9f0'],
      hoverOffset: 4
    }
  ]
}

const config3 = {
  type: 'doughnut',
  data: data3,
  options: {
    circumference: 210,
    rotation: 255
  }
}

const data4 = {
  labels: ['Grupo Superior'],
  datasets: [
    {
      label: 'My First Dataset',
      data: dado6,
      backgroundColor: [cor2, '#ded9d9f0'],
      hoverOffset: 4
    }
  ]
}

const config4 = {
  type: 'doughnut',
  data: data4,
  options: {
    circumference: 210,
    rotation: 255
  }
}

const data5 = {
  labels: ['Grupo Cárdio'],
  datasets: [
    {
      label: 'My First Dataset',
      data: dado7,
      backgroundColor: [cor3, '#ded9d9f0'],
      hoverOffset: 4
    }
  ]
}

const config5 = {
  type: 'doughnut',
  data: data5,
  options: {
    circumference: 210,
    rotation: 255
  }
}

const labels2 = [
  '06:00',
  '08:00',
  '10:00',
  '12:00',
  '14:00',
  '16:00',
  '18:00',
  '20:00',
  '22:00'
]
const data6 = {
  labels: labels2,
  datasets: [
    {
      label: categoria,
      backgroundColor: cor,
      borderColor: cor,
      data: gerarDadosAleatorios(9, 2, 0.5)
    }
  ]
}

const config6 = {
  type: 'line',
  data: data6,
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

const data7 = {
  labels: labels2,
  datasets: [
    {
      label: categoria,
      backgroundColor: cor,
      borderColor: cor,
      data: gerarDadosAleatorios(9, 2, 0.5)
    }
  ]
}

const config7 = {
  type: 'line',
  data: data7,
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
