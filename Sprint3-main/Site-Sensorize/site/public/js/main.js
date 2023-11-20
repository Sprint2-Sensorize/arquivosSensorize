/* NAVBAR */
const desiredElement = document.getElementById('nav') // elemento alvo
const pixelsAmount = '10' // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle') // adiciona classe "changeColor"
  } else {
    desiredElement.classList.remove('changeStyle') // remove classe "changeColor"
  }
})

// Calculadora

document.getElementById('quadradoBranco').style.display = 'none'

// Calculadora

document.getElementById('quadradoBranco').style.display = 'none'

function verificar() {
  var nomeAcademia = input_nome_academia.value
  var nomeRepresentante = input_representante.value
  var nClientes = Number(input_numero_clientes.value)
  var mensalidade = Number(input_mensalidade_clientes.value)
  var perda = nClientes * 0.26

  if (nomeAcademia == '') {
    input_nome_academia.style.borderBottom = '1px solid red'
    input_nome_academia.style.transition = 'border-bottom 0.5s ease'
  } else {
    input_nome_academia.style.borderColor = 'white'
  }
  if (nomeRepresentante == '') {
    input_representante.style.borderBottom = '1px solid red'
    input_representante.style.transition = 'border-bottom 0.5s ease'
  } else {
    input_representante.style.borderColor = 'white'
  }
  if (nClientes == 0) {
    input_numero_clientes.style.borderBottom = '1px solid red'
    input_numero_clientes.style.transition = 'border-bottom 0.5s ease'
  } else {
    input_numero_clientes.style.borderColor = 'white'
  }
  if (mensalidade == 0) {
    input_mensalidade_clientes.style.borderBottom = '1px solid red'
    input_mensalidade_clientes.style.transition = 'border-bottom 0.5s ease'
  } else {
    input_mensalidade_clientes.style.borderColor = 'white'
  }
  if (
    nomeAcademia != '' &&
    nomeRepresentante != '' &&
    nClientes != 0 &&
    mensalidade != 0
  ) {
    document.getElementById('quadradoBranco').style.display = 'flex'
    document.getElementById('div_inputs').style.display = 'none'

    quadradoBranco.innerHTML = `<div class = "div_texto2"> <h2>Olá ${nomeRepresentante}!!</h2><br> <p class = "texto2">Vejo que você se importa
    muito com a ${nomeAcademia} e com seus clientes. Isso é muito importante para o crescimento do seu estabelecimento.<br><br>
    Mas você sabia que <b class = "bold">26%</b> das pessoas desistem de fazer academia nos 3 primeiros meses por conta da superlotação e falta de tempo?
   <br><br> Isso significa a possibilidade de a sua empresa perder <b class = "bold">
   ${perda.toFixed(
     0
   )} clientes</b> nos próximos meses, representando cerca de <b class = "bold">R$${
      mensalidade * perda
    }</b>. <br><br>
   Pensando nisso, nós da <b class = "bold">Sensorize</b> criamos um projeto chamado <b class = "bold">TechGym</b> que vai solucionar esse problema
    <div class = "botao_amostra"><button class = "simulacao"onclick="voltar()" >Voltar</button> <a href="#idForms"><button class = "simulacao" onclick="vontrate()" >Contrate-nos</button></a></div></div>`
  }
}

function voltar() {
  document.getElementById('quadradoBranco').style.display = 'none'
  document.getElementById('div_inputs').style.display = 'flex'
  input_nome_academia.value = ''
  input_representante.value = ''
  input_numero_clientes.value = ''
  input_mensalidade_clientes.value = ''
}

function viacep() {
  var cep = inp_cep_endereco.value

  if (cep.length >= 8) {
    if (cep.length <= 9) {
      var url = `https://viacep.com.br/ws/${cep}/json/`

      fetch(url).then(function (response) {
        response.json().then(popular)
      })
    }

    function popular(dados) {
      if (dados.erro) {
        inp_cep_endereco.style.borderColor = '#ff0000'
        alert(`Não foi possivel Localizar o endereço!`)
      } else {
        inp_cep_endereco.style.borderColor = '#000000'
        inp_rua_endereco.value = `${dados.logradouro}`
        inp_bairro_endereco.value = `${dados.bairro}`
        inp_cidade_endereco.value = `${dados.localidade}`
        inp_estado_endereco.value = `${dados.uf}`
        inp_complemento_endereco.value = `${dados.complemento}`
      }
    }
  } else {
    inp_cep_endereco.style.borderColor = '#ff0000'
    alert(`CEP Invalido!`)
  }
}

function cadastrar() {
  var email = inp_email.value.endsWith(`.com`)
  var senha = inp_senha.value
  var confirmacao = inp_confimacao.value
  var valid = 0
  if (email && inp_email.value.indexOf('@') > 0) {
    inp_email.style.borderColor = '#000000'
  } else {
    inp_email.style.borderColor = '#ff0000'
    alert('Email invalido!')
    valid = 1
  }
  if (senha != confirmacao) {
    alert(`Senhas diferentes`)
    inp_confimacao.style.borderColor = '#ff0000'
    valid = 1
  } else if (
    senha.indexOf('@') > 0 ||
    senha.indexOf('#') > 0 ||
    senha.indexOf('!') > 0 ||
    senha.indexOf('%') > 0
  ) {
    if (valid == 0) {
      window.location.href = 'index_endereco.html'
      inp_senha.style.borderColor = '#000000'
      inp_confimacao.style.borderColor = '#000000'
    }
  } else {
    inp_senha.style.borderColor = '#ff0000'
    inp_confimacao.style.borderColor = '#ff0000'
    alert(`É nescessario que a senha tenha @,!,#,%`)
  }
}
function login() {
  var login = inp_login.value
  var senha = inp_senha.value

  if (login == 'adm@gmail.com' && senha == `@adm123`) {
    window.location.href = 'index_dashboard.html'
  } else {
    alert('Email e/ou senha estão incorretos! Tente novamente')
  }
}

function cadastro_endereco() {
  var numero = inp_numero_endereco.value

  if (numero == '') {
    inp_numero_endereco.style.borderColor = '#ff0000'
  } else {
    window.location.href = 'index_login.html'
  }
}

function girarCard(card) {
  card.classList.toggle('rotated')

  var mensagemOculta = card.querySelector('.mensagemOculta')
  var tituloCaixa = card.querySelector('.tituloCaixa')
  if (card.classList.contains('rotated')) {
    mensagemOculta.style.display = 'flex'
    tituloCaixa.style.display = 'none'
  } else {
    mensagemOculta.style.display = 'none'
    tituloCaixa.style.display = 'flex'
  }
}

let count = 1
document.getElementById('radio1').checked = true
var contador = 0

setInterval(function () {
  nextImage()
}, 3000)

function nextImage() {
  contador++
  count++
  if (count > 4) {
    count = 1
  }

  document.getElementById('radio' + count).checked = true
}
