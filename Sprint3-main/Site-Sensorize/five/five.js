// Importação de bibliotecas
const serialport = require('serialport')
const express = require('express')
const mysql = require('mysql2')

// Configurações
const SERIAL_BAUD_RATE = 9600
const SERVIDOR_PORTA = 3000
const HABILITAR_OPERACAO_INSERIR = true

// Função para comunicação serial
const serial = async valoresChave => {
  // Configuração do pool do banco de dados MySQL
  const poolBancoDados = mysql.createPool({
    host: '10.18.32.71',
    port: 3306,
    user: 'bolinha100',
    password: '123',
    database: 'sensorize'
  })

  // Arrays para armazenar dados do sensor
  var sensorData = []
  var sensorTemp = []

  // Função para simular dados do sensor
  const simulateSensorData = chave => {
    const novoDado = []

    for (let i = 1; i < 6; i++) {
      // Se i for 2, substitui o valor aleatório por chave
      const value = 1
      const fk = 1000 + i
      sensorTemp[i] = sensorTemp[i] || { fkSensor: 0, TempoOcp: 0 }

      if (parseInt(value) == 1) {
        sensorTemp[i].fkSensor = fk
        sensorTemp[i].TempoOcp += 1
      }

      novoDado.push({
        fkSensor: parseInt(fk),
        value: parseInt(value)
      })
    }
    /*    novoDado.push({
      fkSensor: 1006,
      value: 1
    })
    novoDado.push({
      fkSensor: 1007,
      value: 0
    }) */
    novoDado.push(sensorData[sensorData.length - 1])
    novoDado.push(sensorData[sensorData.length - 2])
    return novoDado
  }

  // Função para atualizar o banco de dados com dados do sensor
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

  // Função para atualizar o banco de dados com dados temporários do sensor
  const updateDatabase2 = async () => {
    if (HABILITAR_OPERACAO_INSERIR) {
      // Itera sobre os dados do sensor e insere cada conjunto no banco de dados
      for (const data of sensorTemp) {
        try {
          await poolBancoDados.execute(
            'INSERT INTO historico (tempo_uso_segundos, fk_sensor) VALUES (?, ?);',
            [data.TempoOcp, data.fkSensor]
          )
        } catch (error) {
          console.error('Erro ao inserir dados no banco de dados:', error)
        }
      }
    }
  }

  // Atualiza o banco de dados temporário a cada 60 segundos
  setInterval(() => {
    updateDatabase2()
  }, 60000)

  // Reseta os tempos temporários do sensor a cada 60.001 segundos
  setInterval(() => {
    for (var i = 0; i < 6; i++) {
      sensorTemp[i].TempoOcp = 0
    }
  }, 60001)

  /*
   * Aqui poderiam estar mais operações específicas do seu código
   */

  // Função para buscar dados simulados
  const fetchData = () => {
    setInterval(() => {
      // Gera novos dados simulados e armazena em sensorData
      console.clear()
      const chave = valoresChave.shift() // Remove do início do vetor
      sensorData = simulateSensorData()
      console.log('Dados do sensor:', sensorData)
      console.log('Dados do sensor:', sensorTemp)

      // Continue com o processamento dos dados simulados ou faça o que for necessário
    }, 1000)
  }

  // Atualiza o banco de dados a cada segundo
  setInterval(() => {
    updateDatabase()
  }, 1000)

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
        fkSensor: 1006,
        value: chave
      })
      sensorData.push({
        fkSensor: 1007,
        value: chave
      })

      if (chave == 1) {
        sensorTemp[0].TempoOcp += 1
      }
    })

  // Fim da seção de leitura do Arduino

  console.log

  // Inicia a primeira execução
  fetchData()
  sensorTemp.push({ fkSensor: 1007, TempoOcp: 0 })
  sensorTemp.push({ fkSensor: 1006, TempoOcp: 0 })
}

// Função para iniciar o servidor
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

// Função principal que inicia a comunicação serial e o servidor
;(async () => {
  const valoresChave = []
  await serial(valoresChave)
  servidor(valoresChave)
})()
