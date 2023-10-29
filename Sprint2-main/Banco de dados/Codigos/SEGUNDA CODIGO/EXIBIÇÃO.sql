-- -------------------------------------------------------------------EXIBIÇÂO ------------------------------------------------------------------------------
USE sensorize;
    
-- EXIBIR TODOS OS DADOS DAS TABELAS ACADEMIA, APARELHO, TIPO E GRUPO DE TREINO, ONDE O ID DA ACADEMIA REPRESENTA O CAMPO
-- "FK_ACADEMIA" DA TABELA APARELHOS, O ID DA TABELA TIPO REPRESENTA O CAMPO "FK_TIPO_ID" DA TABELA 
-- APARELHOS E O ID DA TABELA GRUPO DE TREINO REPRESENTA O CAMPO "FK_GRUPO_APARELHO" DA TABELA APARELHOS. 
    
SELECT * FROM academia AS a 
			JOIN aparelho AS ap 
				ON a.academia_id = ap.fk_academia
					JOIN tipo AS t 
						ON t.tipo_id = ap.fk_tipo;
	
-- -------EXIBIR TODOS OS DADOS DA TABELA SENSORES EM CONJUNTO COM A TABELA HISTÓRICO ONDE O "CAMPO SENSOR_ID" DA TABELA SENSORES REPRESENTA -------------------------
----------------------------------------------------------- O CAMPO "FK_SENSOR" DA TABELA HISTÓRICO ------------------------------------------------------------------
SELECT * FROM
	sensores AS s
		JOIN historico AS h
			ON s.sensor_id = h.fk_sensor;
            
    
-- ------------------------------------------------------EXIBINDO TODOS OS DADOS DA ACADEMIA ENDERECO-----------------------------------------------------------------


SELECT * FROM 
	academia AS A
		JOIN endereco AS e
			on a.academia_id = e.fk_academia;
            
-- -------------------------------------------EXIBINDO A SOMA DO TOTAL DE TEMPO DE USO DE TODO O HISTORICO DE TODOS OS GRUPOS-----------------------------------
SELECT a.Nome_academia as "NOME DA ACADEMIA",
		SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND,data_historico_ativo, data_historico_inativo))) AS "ACUMULO DE TEMPO DE USO DE TODOS OS APARELHOS (06:00 - 22:00)"
			FROM academia as a
				JOIN aparelho
					ON fk_academia = Academia_id
						JOIN Sensores 
							ON fk_aparelho = aparelho_id
								JOIN historico
									ON fk_sensor = sensor_id
										where data_historico_ativo BETWEEN '2023-10-24 06:00:00' AND '2023-10-24 22:00:00';

-- -----------------------------------------------------EXIBINDO A SOMA DO TOTAL DE USO DE UM GRUPO ESPECIFICO-------------------------------------------
SELECT  academia.Nome_academia as "Nome da Academia",
			aparelho.grupo_treino as "Grupo de Treino do Aparelho",
				SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND, data_historico_ativo , data_historico_inativo))) AS "Total de Tempo de Uso"
					FROM academia 
						JOIN aparelho
							ON fk_academia = Academia_id
								JOIN Sensores 
									ON fk_aparelho = aparelho_id
										JOIN historico
											ON fk_sensor = sensor_id
												where grupo_treino = 'inferior';
                                                
                                                
-- ---------------------------------------EXIBINDO O MAIOR TEMPO DE USO ININTERRUPTO DE UM GRUPO ESPECIFICO-----------------------
SELECT  academia.Nome_academia as "Nome da Academia",
			aparelho.nome_aparelho as "Nome Do Aparelho",
				aparelho.grupo_treino as "Grupo de Treino do Aparelho",
					historico.*,
						SEC_TO_TIME(MAX(TIMESTAMPDIFF(SECOND, data_historico_ativo, data_historico_inativo))) AS "Total de Tempo de Uso"
							FROM academia 
								JOIN aparelho
									ON fk_academia = Academia_id
										JOIN Sensores 
											ON fk_aparelho = aparelho_id
												JOIN historico
													ON fk_sensor = sensor_id
														where grupo_treino = 'Superior';
													
                                                    
SELECT  academia.Nome_academia as "Nome da Academia",
			aparelho.nome_aparelho as "Nome Do Aparelho",
				aparelho.grupo_treino as "Grupo de Treino do Aparelho",
					historico.*,
						SEC_TO_TIME(TIMESTAMPDIFF(SECOND, data_historico_ativo, data_historico_inativo)) AS TEMPO_TOTAL_DE_USO
							FROM academia 
								JOIN aparelho
									ON fk_academia = Academia_id
										JOIN Sensores 
											ON fk_aparelho = aparelho_id
												JOIN historico
													ON fk_sensor = sensor_id;