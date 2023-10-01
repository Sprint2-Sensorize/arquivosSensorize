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
    inp_senha.style.borderColor = '#000000'
    inp_confimacao.style.borderColor = '#000000'
  } else {
    inp_senha.style.borderColor = '#ff0000'
    inp_confimacao.style.borderColor = '#ff0000'
    alert(`É nescessario que a senha tenha @,!,#,%`)
  }
}
