select aparelhos_cliente.fk_cliente as ID_CLIENTE,
			cliente.nome_academia as ACADEMIA,
				grupo_aparelho.nome_grupo as GRUPO_APARELHOS,
					aparelho.nome_aparelho as NOME_APARELHO,
						sensor.tempo_livre as TEMPO_LIVRE,
							sensor.tempo_uso as TEMPO_USO 
								from aparelhos_cliente join cliente
									on id_cliente = fk_cliente
										join grupo_aparelho
											on id_grupo = fk_grupo
												join aparelho
													on id_aparelho = fk_aparelho
														join sensor
															on id_sensor = fk_sensor;



