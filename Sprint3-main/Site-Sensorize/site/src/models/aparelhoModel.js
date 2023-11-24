var database = require('../database/config')

function buscarAparelho(empresaId) {
  instrucaoSql = `select t.grupo_treino, a.nome_aparelho, h.data_hora_historico as data_hora, sec_to_time(h.tempo_uso_segundos) as tempo from
	tipo_aparelho as t join aparelho as a on a.fk_tipo_aparelho = t.tipo_id join sensores as s on a.fk_sensor = s.sensor_id join historico as h on h.fk_sensor = s.sensor_id where fk_academia = ${empresaId} group by nome_aparelho; `

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
