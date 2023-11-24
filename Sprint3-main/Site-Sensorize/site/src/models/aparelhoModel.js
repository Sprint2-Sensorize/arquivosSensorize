var database = require('../database/config')

function buscarAparelho(empresaId) {
  instrucaoSql = `SELECT t.grupo_treino, a.nome_aparelho, h.data_hora_historico AS data_hora, SEC_TO_TIME(h.tempo_uso_segundos) AS tempo
  FROM tipo_aparelho AS t
  JOIN aparelho AS a ON a.fk_tipo_aparelho = t.tipo_id
  JOIN sensores AS s ON a.fk_sensor = s.sensor_id
  JOIN historico AS h ON h.fk_sensor = s.sensor_id
  WHERE fk_academia = ${empresaId}
  GROUP BY t.grupo_treino, a.nome_aparelho, h.data_hora_historico, h.tempo_uso_segundos;`

  console.log('Executando a instrução SQL: \n' + instrucaoSql)
  return database.executar(instrucaoSql)
}

function cadastrar(empresaId, descricao) {
  instrucaoSql = `insert into (descricao, fk_empresa) aquario values (${descricao}, ${empresaId})`

  console.log('Executando a instrução SQL: \n' + instrucaoSql)
  return database.executar(instrucaoSql)
}

module.exports = {
  buscarAparelho,
  cadastrar
}
