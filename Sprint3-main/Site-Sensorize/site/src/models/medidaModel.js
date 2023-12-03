var database = require('../database/config')

function buscarUltimasMedidas(idAquario, limite_linhas) {
  instrucaoSql = ''
  if (process.env.AMBIENTE_PROCESSO == 'producao') {
    instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura,
        dht11_umidade as umidade,
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`
  } else if (process.env.AMBIENTE_PROCESSO == 'desenvolvimento') {
    instrucaoSql = `select
        dht11_temperatura as temperatura,
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`
  } else {
    console.log(
      '\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n'
    )
    return
  }

  console.log('Executando a instrução SQL: \n' + instrucaoSql)
  return database.executar(instrucaoSql)
}

function buscarMedidasEmTempoReal(grupo) {
  instrucaoSql = `
      SELECT registro_ocp
      FROM tipo_aparelho
      JOIN aparelho AS a ON a.fk_tipo_aparelho = tipo_id
      JOIN sensores AS s ON a.fk_sensor = sensor_id
      JOIN historico_temp AS h ON h.fk_sensor = sensor_id
      WHERE grupo_treino = '${grupo}';
    `

  console.log('Executando a instrução SQL: \n' + instrucaoSql)
  return database.executar(instrucaoSql)
}
function buscarHist(data) {
  let instrucaoSql1 = `
  select t.grupo_treino, sum(h.tempo_uso_segundos) as historico from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where data_hora_historico between ('${data} 06:00:00') and ('${data} 10:00:00') group by grupo_treino;
    `
  let instrucaoSql2 = `
  select t.grupo_treino, sum(h.tempo_uso_segundos) as historico from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where data_hora_historico between ('${data} 10:00:00') and ('${data} 14:00:00') group by grupo_treino;
    `
  let instrucaoSql3 = `
  select t.grupo_treino, sum(h.tempo_uso_segundos) as historico from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where data_hora_historico between ('${data} 14:00:00') and ('${data} 18:00:00') group by grupo_treino;
    `
  let instrucaoSql4 = `
  select t.grupo_treino, sum(h.tempo_uso_segundos) as historico from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where data_hora_historico between ('${data} 18:00:00') and ('${data} 22:00:00') group by grupo_treino;
    `

  console.log('Executando a instrução SQL: \n' + instrucaoSql1)
  console.log('Executando a instrução SQL: \n' + instrucaoSql2)
  console.log('Executando a instrução SQL: \n' + instrucaoSql3)
  console.log('Executando a instrução SQL: \n' + instrucaoSql4)
  return Promise.all([
    database.executar(instrucaoSql1),
    database.executar(instrucaoSql2),
    database.executar(instrucaoSql3),
    database.executar(instrucaoSql4)
  ])
}

module.exports = {
  buscarUltimasMedidas,
  buscarMedidasEmTempoReal,
  buscarHist
}
