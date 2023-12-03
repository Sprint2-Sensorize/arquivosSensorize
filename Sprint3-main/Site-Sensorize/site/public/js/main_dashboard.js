function mostrar_perfil() {
  document.getElementById('link_cardio').style.color = 'white'
  document.getElementById('link_inferior').style.color = 'white'
  document.getElementById('link_superior').style.color = 'white'
  tela_aparelho.style.display = 'none'
  tela_principal.style.display = 'none'
  tela_perfil.style.display = 'flex'
  const submenu = document.querySelector('.submenu')
  submenu.style.display = 'none'
  document.getElementById('link_perfil').style.borderBottom = 'solid 2px orange'
  document.getElementById('link_dashboard').style.borderBottom = 'none'
  document.getElementById('link_aparelhos').style.borderBottom = 'none'
}
function mostrar_aparelhos() {
  tela_aparelho.style.display = 'flex'
  tela_principal.style.display = 'none'
  tela_perfil.style.display = 'none'
}
function mostrar_principal() {
  document.getElementById('link_cardio').style.color = 'white'
  document.getElementById('link_inferior').style.color = 'white'
  document.getElementById('link_superior').style.color = 'white'
  tela_aparelho.style.display = 'none'
  tela_principal.style.display = 'flex'
  tela_perfil.style.display = 'none'
  const submenu = document.querySelector('.submenu')
  submenu.style.display = 'none'
  document.getElementById('link_dashboard').style.borderBottom =
    'solid 2px orange'
  document.getElementById('link_perfil').style.borderBottom = 'none'
  document.getElementById('link_aparelhos').style.borderBottom = 'none'
}
function mostrar_superior() {
  table_inf.style.display = 'none'
  table_card.style.display = 'none'
  table_sup.style.display = 'flex'
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Registro Diário do Uso de Aparelhos Superiores`
  aparelho_superior.style.display = 'block'
  aparelho_infeior.style.display = 'none'
  aparelho_cardio.style.display = 'none'
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  document.getElementById('link_cardio').style.color = 'white'
  document.getElementById('link_inferior').style.color = 'white'
  document.getElementById('link_superior').style.color = 'orange'
  myChart7.data.datasets[0].backgroundColor = 'purple'
  myChart7.data.datasets[0].borderColor = 'purple'
  myChart6.data.datasets[0].offset = [30, 0, 0]
  myChart6.options.plugins.title.text = 'Quantidade de aparelhos Superior'
  myChart7.update()
  myChart6.update()
}
function mostrar_inferior() {
  table_inf.style.display = 'flex'
  table_card.style.display = 'none'
  table_sup.style.display = 'none'
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Registro Diário do Uso de Aparelhos Inferiores`
  aparelho_infeior.style.display = 'block'
  aparelho_cardio.style.display = 'none'
  aparelho_superior.style.display = 'none'
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  document.getElementById('link_cardio').style.color = 'white'
  document.getElementById('link_inferior').style.color = 'orange'
  document.getElementById('link_superior').style.color = 'white'
  myChart7.data.datasets[0].backgroundColor = 'blue'
  myChart7.data.datasets[0].borderColor = 'blue'
  myChart6.data.datasets[0].offset = [0, 30, 0]
  myChart6.options.plugins.title.text = 'Quantidade de aparelhos Inferior'
  myChart7.update()
  myChart6.update()
}
function mostrar_cardio() {
  table_inf.style.display = 'none'
  table_card.style.display = 'flex'
  table_sup.style.display = 'none'
  tela_aparelho.style.display = `flex`
  analise_aparelho.innerHTML = `Registro Diário do Uso de Aparelhos Cárdio`
  aparelho_cardio.style.display = 'block'
  aparelho_superior.style.display = 'none'
  aparelho_infeior.style.display = 'none'
  atualizarGrafico(myChart7, gerarDadosAleatorios(8, 2, 0.5))
  document.getElementById('link_cardio').style.color = 'orange'
  document.getElementById('link_inferior').style.color = 'white'
  document.getElementById('link_superior').style.color = 'white'
  myChart7.data.datasets[0].backgroundColor = 'gray'
  myChart7.data.datasets[0].borderColor = 'gray'
  myChart6.data.datasets[0].offset = [0, 0, 30]
  myChart6.options.plugins.title.text = 'Quantidade de aparelhos Cárdio'
  myChart7.update()
  myChart6.update()
}

function atualizarGrafico(chart, newData) {
  chart.data.datasets[0].data = [0, ...newData]
  chart.update()
}

/* submenu function */

function toggleSublinks() {
  const borda = document.getElementById('link_aparelhos')
  const submenu = document.querySelector('.submenu')
  document.getElementById('link_perfil').style.borderBottom = 'none'
  document.getElementById('link_dashboard').style.borderBottom = 'none'

  if (submenu.style.display === 'none' || submenu.style.display === '') {
    submenu.style.display = 'flex'
    borda.style.borderBottom = '2px solid orange'
    sair.style.marginTop = '20px'
  } else {
    submenu.style.display = 'none'
    borda.style.borderBottom = 'none'
    sair.style.marginTop = '-20px'
  }
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

/* var cor1 = ''
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
} */

const labels = ['06h as 10h', '10h as 14h', '14h as 18h', '18h as 22h']

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Inferior',
      backgroundColor: 'purple',
      borderColor: 'black',
      borderWidth: 2
    },
    {
      label: 'Superior',
      backgroundColor: 'blue',
      borderColor: 'black',
      borderWidth: 2
    },
    {
      label: 'Cárdio',
      backgroundColor: 'gray',
      borderColor: 'black',
      borderWidth: 2
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
      label: 'Aparelho'
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
      backgroundColor: ['green', '#ded9d9f0'],
      borderWidth: 0,
      hoverOffset: 4
    }
  ]
}

const config3 = {
  type: 'doughnut',
  data: data3,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    circumference: 210,
    rotation: 255
  }
}

const data4 = {
  labels: ['Grupo Superior'],
  datasets: [
    {
      label: 'My First Dataset',
      backgroundColor: ['orange', '#ded9d9f0'],
      borderWidth: 0,
      hoverOffset: 4
    }
  ]
}

const config4 = {
  type: 'doughnut',
  data: data4,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    circumference: 210,
    rotation: 255
  }
}

const data5 = {
  labels: ['Grupo Cárdio'],
  datasets: [
    {
      label: 'My First Dataset',
      backgroundColor: ['red', '#ded9d9f0'],
      borderWidth: 0,
      hoverOffset: 4
    }
  ]
}

const config5 = {
  type: 'doughnut',
  data: data5,
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    circumference: 210,
    rotation: 255
  }
}

const labels3 = ['Superior', 'Inferior', 'Cárdio']

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
  labels: labels3,
  datasets: [
    {
      label: ['Superior', 'Inferior', 'Cárdio'],
      backgroundColor: ['purple', 'blue', 'gray'],
      borderWidth: 0,
      data: [45, 49, 20],
      hoverOffset: 4,
      offset: [0, 0, 0]
    }
  ]
}

const config6 = {
  type: 'pie',
  data: data6,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Distribuição de Aparelhos por Grupo de Treino',
        fontSize: 25,
        color: 'black'
      }
    }
  }
}

const data7 = {
  labels: labels2,
  datasets: [
    {
      label: 'Aparelho'
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
        text: 'Análise de Frequência diária do aparelho selecionado',
        color: 'black'
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

function atualizarGrafico(
  grupo,
  myChart,
  limite1,
  limite0,
  n1,
  n2,
  n3,
  n4,
  n5
) {
  fetch(`/medidas/tempo-real/${grupo}`, { cache: 'no-store' })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (novoDado) {
          const medidasTempoReal_1 = []
          const medidasTempoReal_0 = []
          for (var i = 0; i < limite0; i++) {
            medidasTempoReal_0.push(0)
          }
          for (var i = 0; i < limite1; i++) {
            medidasTempoReal_1.push(1)
          }
          for (var i = 0; i < novoDado.length; i++) {
            if (novoDado[i].registro_ocp == 0) {
              medidasTempoReal_0.push(0)
            } else {
              medidasTempoReal_1.push(1)
            }
          }

          var gp = document.getElementById(`inf_${grupo}`)
          var icon_g = document.getElementById(`g_${grupo}`)

          var canvas = myChart.canvas
          if (medidasTempoReal_1.length < n1) {
            myChart.data.datasets[0].backgroundColor = ['#8e0000', '#ded9d9f0']
            icon_g.classList.remove('icon-check')
            icon_g.classList.add('icon-warning')
          } else if (medidasTempoReal_1.length <= n2) {
            myChart.data.datasets[0].backgroundColor = ['orange', '#ded9d9f0']
            canvas.classList.remove('alerta_div')
            gp.classList.remove('alerta_div')
            icon_g.classList.remove('icon-check')
            icon_g.classList.add('icon-warning')
          } else if (medidasTempoReal_1.length <= n3) {
            myChart.data.datasets[0].backgroundColor = ['green', '#ded9d9f0']
            canvas.classList.remove('alerta_div')
            gp.classList.remove('alerta_div')
            icon_g.classList.remove('icon-warning')
            icon_g.classList.remove('alerta_div2')
            icon_g.classList.add('icon-check')
          } else if (medidasTempoReal_1.length <= n4) {
            myChart.data.datasets[0].backgroundColor = ['orange', '#ded9d9f0']
            canvas.classList.remove('alerta_div')
            gp.classList.remove('alerta_div')
            icon_g.classList.remove('icon-check')
            icon_g.classList.add('icon-warning')
            icon_g.classList.add('alerta_div2')
          } else if (medidasTempoReal_1.length >= n5) {
            myChart.data.datasets[0].backgroundColor = ['red', '#ded9d9f0']
            icon_g.classList.remove('alerta_div2')
            icon_g.classList.remove('icon-check')
            gp.classList.add('alerta_div')
            canvas.classList.add('alerta_div')
            icon_g.classList.add('icon-warning')
            icon_g.classList.add('alerta_div')
          }

          const vetorContagem = [
            medidasTempoReal_1.length,
            medidasTempoReal_0.length
          ]

          var porcentagem =
            (medidasTempoReal_1.length /
              (medidasTempoReal_1.length + medidasTempoReal_0.length)) *
            100

          gp.innerHTML = porcentagem.toFixed(0) + '%'

          myChart.data.datasets[0].data = vetorContagem
          myChart.update()
        })
      } else {
        console.error('Nenhum dado encontrado ou erro na API')
      }
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção de dados para o gráfico: ${error.message}`
      )
    })
}
function historico(myChart, myChart2, data) {
  fetch(`/medidas/historico/${data}`, { cache: 'no-store' })
    .then(function (response) {
      // Verifique se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error(
          `Erro na obtenção de dados para o gráfico: ${response.statusText}`
        )
      }
      if (response.status == 204) {
        alert('')
      }
      return response.json()
    })
    .then(function (dados) {
      if (dados && dados.length > 0) {
        var dado_inferior = []
        var dado_superior = []
        var dado_cardio = []
        for (var i = 0; dados.length > i; i++) {
          if (dados[i].length > 0) {
            if (dados[i][1] != undefined) {
              dado_cardio.push(dados[i][1].historico)
            }
          }
          if (dados[i].length > 0) {
            if (dados[i][2] != undefined) {
              dado_superior.push(dados[i][2].historico)
            }
          }
          if (dados[i].length > 0) {
            if (dados[i][0] != undefined) {
              dado_inferior.push(dados[i][0].historico)
            }
          }
        }
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

        // VALIDANDO A SOMA DO MAOIR RESULTADO PARA COLOCAR NO GRAFICO A DIREITA
        var dado4 = []

        if (maiorValor == soma_inferior) {
          categoria = 'Inferior'
          cor = 'purple'
          dado4 = dado_inferior
        } else if (maiorValor == soma_superior) {
          categoria = 'Superior'
          cor = 'blue'
          dado4 = dado_superior
        } else if (maiorValor == soma_cardio) {
          categoria = 'Cárdio'
          cor = 'gray'
          dado4 = dado_cardio
        }
        var dado4_horas = dado4.map(segundosParaTempo)
        var dado_inferior_horas = dado_inferior.map(segundosParaTempo)
        var dado_superior_horas = dado_superior.map(segundosParaTempo)
        var dado_cardio_horas = dado_cardio.map(segundosParaTempo)

        myChart.data.datasets[0].data = dado_inferior_horas
        myChart.data.datasets[1].data = dado_superior_horas
        myChart.data.datasets[2].data = dado_cardio_horas
        myChart2.data.datasets[0].data = dado4_horas
        myChart2.data.datasets[0].label = categoria
        myChart2.data.datasets[0].backgroundColor = cor
        myChart2.data.datasets[0].borderColor = cor

        myChart.update()
        myChart2.update()
      }
      console.log('Dados recebidos:', dados)
    })
    .catch(function (error) {
      console.error(
        `Erro na obtenção de dados para o gráfico: ${error.message}`
      )
    })
}

function segundosParaTempo(segundos) {
  const horas = Math.floor(segundos / 3600)
  const minutos = Math.floor((segundos % 3600) / 60)

  const formatoTempo = [
    String(horas).padStart(2, '0'),
    String(minutos).padStart(2, '0')
  ].join('.')
  return formatoTempo
}
