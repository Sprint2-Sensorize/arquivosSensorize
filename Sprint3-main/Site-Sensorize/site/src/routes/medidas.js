var express = require('express')
var router = express.Router()

var medidaController = require('../controllers/medidaController')

router.get('/ultimas/:idAquario', function (req, res) {
  medidaController.buscarUltimasMedidas(req, res)
})

router.get('/tempo-real/:grupo', function (req, res) {
  medidaController.buscarMedidasEmTempoReal(req, res)
})
router.get('/historico/:data', function (req, res) {
  medidaController.buscarHist(req, res)
})

module.exports = router
