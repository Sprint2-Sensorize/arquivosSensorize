/* NAVBAR */
const desiredElement = document.getElementById('nav') // elemento alvo
const pixelsAmount = '50' // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
  if (window.scrollY > pixelsAmount) {
    desiredElement.classList.add('changeStyle') // adiciona classe "changeColor"
  } else {
    desiredElement.classList.remove('changeStyle') // remove classe "changeColor"
  }
})

/* CARROSSEL */
const carrosselTudo = document.querySelector('.carrosselTudo')
const carousel = document.querySelector('.carousel')
const firstCardWidth = carousel.querySelector('.card').offsetWidth
const arrowBtns = document.querySelectorAll('.carrosselTudo i')
const carouselChildrens = [...carousel.children]

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
  })

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
  carousel.insertAdjacentHTML('beforeend', card.outerHTML)
})

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add('no-transition')
carousel.scrollLeft = carousel.offsetWidth
carousel.classList.remove('no-transition')

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    carousel.scrollLeft += btn.id == 'left' ? -firstCardWidth : firstCardWidth
  })
})

const dragStart = e => {
  isDragging = true
  carousel.classList.add('dragging')
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX
  startScrollLeft = carousel.scrollLeft
}

const dragging = e => {
  if (!isDragging) return // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
}

const dragStop = () => {
  isDragging = false
  carousel.classList.remove('dragging')
}

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add('no-transition')
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth
    carousel.classList.remove('no-transition')
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add('no-transition')
    carousel.scrollLeft = carousel.offsetWidth
    carousel.classList.remove('no-transition')
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId)
  /* if(!wrapper.matches(":hover")) autoPlay(); */
}

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500)
}
autoPlay()

carousel.addEventListener('mousedown', dragStart)
carousel.addEventListener('mousemove', dragging)
document.addEventListener('mouseup', dragStop)
carousel.addEventListener('scroll', infiniteScroll)
carrosselTudo.addEventListener('mouseenter', () => clearTimeout(timeoutId))
carrosselTudo.addEventListener('mouseleave', autoPlay)

// Calculadora

document.getElementById('quadradoBranco').style.display = 'none'

function verificar() {
  var nomeAcademia = input_nome_academia.value
  var nomeRepresentante = input_representante.value
  var nClientes = Number(input_numero_clientes.value)
  var mensalidade = Number(input_mensalidade_clientes.value)

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

    quadradoBranco.innerHTML = `<div class = "div_texto2"> <h2>Olá! ${nomeRepresentante}!!</h2><br> <p class = "texto2">Vejo que você se importa muito com a ${nomeAcademia} e com seus clientes. Isso é muito importante para o crescimento do seu estabelecimento.<br>
    Mas você sabia que <b>25%</b> das pessoas desistem de fazer academia por conta da falta de tempo e outros <b>16%</b> desistem devido à lotação das academias?
    <br><br> Isso significa a possibilidade de a sua empresa perder <b>${(
      nClientes * 0.41
    ).toFixed(0)} clientes</b> nos próximos meses. <br>
    Pensando nisso, nós da <b>Sensorize</b> criamos um projeto chamado <b>TechGym</b> que vai solucionar esse problema<br><br>
    <br> Utilizando dados que serão obtidos por meio de sensores colocados nos equipamentos garantiremos uma melhor rotatividade
     para a sua academia, para que todos os seus clientes consigam treinar sem sofrer com esses problemas.</p><br>
    <div style= justify-content: space-between; "display: flex;"> <button class = "simulacao" style = "width: 150px" "margin: 40px" onclick="voltar()" >Voltar</button> <a href="#idForms"><button class = "simulacao" style = "width: 150px" "margin: 40px" onclick="vontrate()" >Contrate-nos</button></a></div></div>`
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
  var cnpj = inp_cpj.value.length
  var email = inp_email.value.endsWith(`.com`)
  var senha = inp_senha.value
  var confirmacao = inp_confimacao.value
  console.log(email)
  if (cnpj >= 14 && cnpj <= 19) {
    inp_cpj.style.borderColor = '#000000'
  } else {
    inp_cpj.style.borderColor = '#ff0000'
    inp_cpj.style.borderWidth = '2px'
  }
  if (email && inp_email.value.indexOf('@') > 0) {
    inp_email.style.borderColor = '#000000'
    alert(`Email valido!`)
  } else {
    inp_email.style.borderColor = '#ff0000'
  }
  if (senha != confirmacao) {
    alert(`Senhas diferentes`)
    inp_confimacao.style.borderColor = '#ff0000'
  } else if (
    senha.indexOf('@') > 0 ||
    senha.indexOf('#') > 0 ||
    senha.indexOf('!') > 0 ||
    senha.indexOf('%') > 0
  ) {
    window.location.href = '../Dados Endereço/index_endereco.html'
    inp_senha.style.borderColor = '#000000'
    inp_confimacao.style.borderColor = '#000000'
  } else {
    inp_senha.style.borderColor = '#ff0000'
    inp_confimacao.style.borderColor = '#ff0000'
    alert(`É nescessario que a senha tenha @,!,#,%`)
  }
}
function login() {
  var login = inp_login.value
  var senha = inp_senha.value

  if (login == 'teste@gmail.com' && senha == 123) {
    alert('Login Realizado com sucesso!')
    window.location.href = '#'
  } else {
    alert('Tente novamente')
  }
}

function cadastro_endereco() {
  var numero = inp_numero_endereco.value

  if (numero == '') {
    inp_numero_endereco.style.borderColor = '#ff0000'
  } else {
    alert('Cadastro realizado com sucesso')
    window.location.href = '../Tela de Login/Login.html'
  }
}
