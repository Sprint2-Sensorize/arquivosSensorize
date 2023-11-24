var express = require('express')
var router = express.Router()

var aparelhoControler = require('../controllers/aparelhoController')

router.get('/:empresaId', function (req, res) {
  aparelhoControler.buscarAparelho(req, res)
})

router.post('/cadastrar', function (req, res) {
  aparelhoControler.cadastrar(req, res)
})

module.exports = router
