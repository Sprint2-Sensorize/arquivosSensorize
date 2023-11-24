var usuarioModel = require('../models/usuarioModel')
var aparelhoModel = require('../models/aparelhoModel')

async function autenticar(req, res) {
  try {
    const email = req.body.emailServer
    const senha = req.body.senhaServer

    if (!email) {
      return res.status(400).send('Seu email está undefined!')
    } else if (!senha) {
      return res.status(400).send('Sua senha está indefinida!')
    }

    const resultadoAutenticar = await usuarioModel.autenticar(email, senha)

    console.log(
      `\nResultados encontrados: ${
        resultadoAutenticar ? resultadoAutenticar.length : 0
      }`
    )
    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`) // transforma JSON em String

    if (resultadoAutenticar && resultadoAutenticar.length === 1) {
      console.log(resultadoAutenticar)

      const usuarioId = resultadoAutenticar[0].usuario_id

      // Executa ambas as consultas em paralelo
      const [resultadoAparelho] = await Promise.all([
        aparelhoModel.buscarAparelho(usuarioId)
      ])

      if (resultadoAparelho.length >= 0) {
        res.json({
          id: usuarioId,
          email: resultadoAutenticar[0].email,
          nome: resultadoAutenticar[0].nome,
          nome_academia: resultadoAutenticar[0].academia,
          cnpj_academia: resultadoAutenticar[0].cnpj,
          tel_fixo: resultadoAutenticar[0].fixo,
          tel_cel: resultadoAutenticar[0].celular,
          aparelhos: resultadoAparelho
        })
      } else {
        res.status(403).send('Usuário não possui aparelho associado')
      }
    } else if (!resultadoAutenticar || resultadoAutenticar.length === 0) {
      res.status(403).send('Email e/ou senha inválido(s)')
    } else {
      res.status(403).send('Mais de um usuário com o mesmo login e senha!')
    }
  } catch (erro) {
    console.log(erro)
    console.log('\nHouve um erro ao realizar o login! Erro: ', erro.sqlMessage)
    res.status(500).json(erro.sqlMessage)
  }
}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nome = req.body.nomeServer
  var email = req.body.emailServer
  var senha = req.body.senhaServer
  var token = req.body.tokenServer

  // Faça as validações dos valores
  if (nome == undefined) {
    res.status(400).send('Seu nome está undefined!')
  } else if (email == undefined) {
    res.status(400).send('Seu email está undefined!')
  } else if (senha == undefined) {
    res.status(400).send('Sua senha está undefined!')
  } else if (token == undefined) {
    res.status(400).send('Sua empresa está undefined!')
  } else {
    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel
      .cadastrar(nome, email, senha, token)
      .then(function (resultado) {
        res.json(resultado)
      })
      .catch(function (erro) {
        console.log(erro)
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        )
        res.status(500).json(erro.sqlMessage)
      })
  }
}

module.exports = {
  autenticar,
  cadastrar
}
