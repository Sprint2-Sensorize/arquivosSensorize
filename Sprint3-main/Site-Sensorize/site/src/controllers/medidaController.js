var medidaModel = require('../models/medidaModel')

function buscarUltimasMedidas(req, res) {
  const limite_linhas = 7

  var idAquario = req.params.idAquario

  console.log(`Recuperando as ultimas ${limite_linhas} medidas`)

  medidaModel
    .buscarUltimasMedidas(idAquario, limite_linhas)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado)
      } else {
        res.status(204).send('Nenhum resultado encontrado!')
      }
    })
    .catch(function (erro) {
      console.log(erro)
      console.log(
        'Houve um erro ao buscar as ultimas medidas.',
        erro.sqlMessage
      )
      res.status(500).json(erro.sqlMessage)
    })
}

function buscarMedidasEmTempoReal(req, res) {
  var grupo = req.params.grupo

  console.log(`Recuperando medidas em tempo real para o grupo ${grupo}`)

  medidaModel
    .buscarMedidasEmTempoReal(grupo)
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado)
      } else {
        res.status(204).send('Nenhum resultado encontrado!')
      }
    })
    .catch(function (erro) {
      console.log(erro)
      console.log(
        'Houve um erro ao buscar as últimas medidas.',
        erro.sqlMessage
      )
      res.status(500).json(erro.sqlMessage)
    })
}
function buscarHist(req, res) {
  var data = req.params.data

  console.log(`Recuperando medidas em tempo real para o grupo ${data}`)

  medidaModel
    .buscarHist(data)
    .then(function (resultado) {
      if (
        resultado[0].length == 0 &&
        resultado[1].length == 0 &&
        resultado[2].length == 0 &&
        resultado[3].length == 0
      ) {
        res.status(204).send('Nenhum resultado encontrado!')
      } else if (resultado.length > 0) {
        res.status(200).json(resultado)
      }
    })
    .catch(function (erro) {
      console.log(erro)
      console.log(
        'Houve um erro ao buscar as últimas medidas.',
        erro.sqlMessage
      )
      res.status(500).json(erro.sqlMessage)
    })
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarHist
}
