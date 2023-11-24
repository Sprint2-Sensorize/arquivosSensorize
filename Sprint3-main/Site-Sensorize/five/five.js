const serialport = require('serialport')
const express = require('express')
const mysql = require('mysql2')

const SERIAL_BAUD_RATE = 9600
const SERVIDOR_PORTA = 3000
const HABILITAR_OPERACAO_INSERIR = true

const serial = async valoresChave => {
  const poolBancoDados = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'jhow',
    database: 'sensorize'
  })

  var sensorData = []
  var sensorTemp = []

  const simulateSensorData = chave => {
    const novoDado = []

    for (let i = 1; i < 5; i++) {
      // Se i for 2, substitua o valor aleatório por chave
      const value = Math.random() * 2
      const fk = 1000 + i
      sensorTemp[i] = sensorTemp[i] || { fkSensor: 0, TempoOcp: 0 }

      if (parseInt(value) == 1) {
        sensorTemp[i].fkSensor = fk
        sensorTemp[i].TempoOcp += 1
        if (
          sensorData.length > 0 &&
          sensorData[sensorData.length - 1].value == 1
        ) {
          sensorTemp[4].fkSensor = 1005
          sensorTemp[4].TempoOcp += 1
        }
      }
      novoDado.push({
        fkSensor: parseInt(fk),
        value: parseInt(value)
      })
    }
    novoDado.push(sensorData[sensorData.length - 1])
    return novoDado
  }

  const updateDatabase = async () => {
    if (HABILITAR_OPERACAO_INSERIR) {
      // Itera sobre os dados do sensor e insere cada conjunto no banco de dados
      for (const data of sensorData) {
        try {
          await poolBancoDados.execute(
            `Update historico_temp set registro_ocp = ? where fk_sensor = ?;`,
            [data.value, data.fkSensor]
          )
        } catch (error) {
          console.error('Erro ao inserir dados no banco de dados:', error)
        }
      }
    }
  }

  const fetchData = () => {
    setInterval(() => {
      // Gera novos dados simulados e armazena em sensorData
      const chave = valoresChave.shift() // Remova do início do vetor
      sensorData = simulateSensorData()
      console.log('Dados do sensor:', sensorData)
      console.log(sensorTemp)

      // Continue com o processamento dos dados simulados ou faça o que for necessário
      updateDatabase()
    }, 1000)
  }

  // Descomente esta seção para integrar a leitura do Arduino

  const portas = await serialport.SerialPort.list()
  const portaArduino = portas.find(
    porta => porta.vendorId == 2341 && porta.productId == 43
  )
  if (!portaArduino) {
    throw new Error('O arduino não foi encontrado em nenhuma porta serial')
  }
  const arduino = new serialport.SerialPort({
    path: portaArduino.path,
    baudRate: SERIAL_BAUD_RATE
  })
  arduino.on('open', () => {
    console.log(
      `A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`
    )
  })
  arduino
    .pipe(new serialport.ReadlineParser({ delimiter: '\r\n' }))
    .on('data', async data => {
      const valores = data.split(',')
      const chave = parseInt(valores)
      sensorData.push({
        fkSensor: 1005,
        value: chave
      })
    })

  console.log

  // Inicie a primeira execução
  fetchData()
}

const servidor = valoresChave => {
  const app = express()
  app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, Accept'
    )
    next()
  })

  app.listen(SERVIDOR_PORTA, () => {
    console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`)
  })

  app.get('/sensores/chave', (_, response) => {
    return response.json(valoresChave)
  })
}

;(async () => {
  const valoresChave = []
  await serial(valoresChave)
  servidor(valoresChave)
})()
