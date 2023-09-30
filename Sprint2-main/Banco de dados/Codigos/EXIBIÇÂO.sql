select cliente.id_cliente as ID_CLIENTE,
			cliente.nome_academia as NOME_ACADEMIA,
				aparelho.nome_aparelho as NOME_DO_APARELHO,
					grupo_aparelho.nome_grupo as NOME_DO_GRUPO,
						sensor.id_sensor as ID_SENSOR,
							sensor.descricao_sensor as DESCRICAO,
								historico.tempo_uso as TEMPO_DE_USO,
									historico.tempo_livre as TEMPO_LIVRE from cliente
										join aparelho
											on fk_aparelho = id_aparelho
												join sensor
													on fk_sensor = id_sensor
														join grupo_aparelho
															on fk_aparelho_grupo = id_aparelho
																join historico
																	on fk_historico = id_historico;
                                                                    
                                                                    

																		
                                                            




