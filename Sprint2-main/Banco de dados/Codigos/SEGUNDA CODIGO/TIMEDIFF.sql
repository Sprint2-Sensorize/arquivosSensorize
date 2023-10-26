CREATE DATABASE projeto;

USE projeto;

CREATE TABLE academia(
	Academia_id INT PRIMARY KEY AUTO_INCREMENT,
		Nome_academia VARCHAR(45),
			Cnpj CHAR(14),
				Início_contrato DATE,
					Status_contrato VARCHAR(10),
						fim_contrato DATE
);

CREATE TABLE Sensores(
	sensor_id INT PRIMARY KEY AUTO_INCREMENT,
		descricao_sensor VARCHAR(45),
			Data_Instalacao DATE,
				fk_Aparelho INT);

CREATE TABLE tipo(
	tipo_id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(45)
);

CREATE TABLE grupo_de_treino(
	grupo_treino_id INT PRIMARY KEY AUTO_INCREMENT,
		nome_grupo VARCHAR(45)
);
CREATE TABLE endereco (
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
        estado CHAR(2),
            cidade VARCHAR(45),
                cep CHAR(10),
                    logradouro VARCHAR(100),
                        numero VARCHAR(45),
                            complemento VARCHAR(45),
								fk_academia INT);

CREATE TABLE historico (
    id_historico INT AUTO_INCREMENT,
        data_historico_ativo datetime default current_timestamp,
            data_historico_inativo datetime default current_timestamp,
                fk_sensor INT,
                     PRIMARY KEY (id_historico, fk_sensor));

CREATE TABLE representante_login (
    id_representante INT AUTO_INCREMENT,
        nome_usuario VARCHAR(50),
            senha_acesso VARCHAR(50),
                email_acesso VARCHAR(100),
                    fk_academia INT,
                        PRIMARY KEY (id_representante, fk_academia));

CREATE TABLE aparelho (
    aparelho_id INT AUTO_INCREMENT,
        fk_tipo_id INT,
            fk_grupo_aparelho INT,
                nome_aparelho VARCHAR(45),
                    fk_academia INT,
                    PRIMARY KEY (aparelho_id, fk_tipo_id, fk_grupo_aparelho));
                    
CREATE TABLE telefone(
id_telefone INT AUTO_INCREMENT,
	telefone char(14),
		celular char(14),
			fk_academia int,
				constraint fk_academia foreign key (fk_academia) references academia(academia_id),
					primary key (id_telefone, fk_academia)
);
                    
ALTER TABLE historico add constraint fk_sensor
	foreign key (fk_sensor)
		references sensores(sensor_id);

ALTER TABLE sensores add constraint fk_aparelho
	foreign key (fk_Aparelho)
		references aparelho(aparelho_id);

ALTER TABLE aparelho add constraint fk_tipo
	foreign key (fk_tipo_id)
		references tipo(tipo_id);

ALTER TABLE aparelho add constraint fk_grupo_aparelho
	foreign key (fk_grupo_aparelho)
		references grupo_de_treino(grupo_treino_id);
        
ALTER TABLE aparelho add constraint fkAcademia
	foreign key (fk_academia)
		references academia (Academia_id);

ALTER TABLE aparelho add constraint fk_academia foreign key (fk_academia) references academia(academia_id);

ALTER TABLE representante_login add constraint fk_academia_representante foreign key (fk_academia) references academia(academia_id);

ALTER TABLE endereco add constraint fk_academia_endereco foreign key (fk_academia) references academia(academia_id);

alter table historico auto_increment = 1;

alter table aparelho auto_increment = 100;

alter table sensores auto_increment = 50;

alter table tipo auto_increment = 1000;

alter table grupo_de_treino auto_increment = 200;

alter table academia auto_increment = 500;

alter table usuario auto_increment = 700;

alter table endereco auto_increment = 400;

alter table academia modify column cnpj CHAR(20);


INSERT INTO academia (Nome_academia, Cnpj, Início_contrato, Status_contrato, fim_contrato)
VALUES
    ('Coliseu', '00.312.222/1234-56,', '2023-01-15', 'Ativo', '2023-12-31');
    
    
    
    select * from academia;
    
    INSERT INTO tipo (nome) VALUES
    ('Leg-Press'),
    ('Peck Deck'),
    ('Bicicleta Ergométrica'),
    ('Esteira'),
    ('Escada'),
    ('Panturrilha em pé'),
    ('Panturrilha sentado'),
    ('Remada baixa'),
    ('Remada cavalinho');
    
    select * from tipo;
    
    insert into grupo_de_treino (nome_grupo) values
    ('Cardio'),
    ('Superior'),
    ('Inferior');
    
    select * from grupo_de_treino;
    
    INSERT INTO aparelho (nome_aparelho, fk_tipo_id, fk_grupo_aparelho) VALUES
    ('Leg press azul', 1000, 202),
    ('Bicicleta Ergométrica Porta', 1002, 200),
    ('Peck Deck novo', 1001, 201),
    ('Esteira vermelha', 1003, 200),
    ('Escada Janela', 1004, 200),
    ('Panturrilha em pé verde', 1005, 202),
    ('Panturrilha sentado amarela', 1006, 202),
    ('Remada baixa nova', 1007, 201),
    ('Remada cavalinho roxo', 1008, 201);
    
    update aparelho set fk_academia = 500 where aparelho_id IN(100,101,102,103,104,105,106,107,108);
    
    select * from aparelho;
    
    insert into sensores (descricao_sensor, data_instalacao, fk_aparelho) values
    ('Sensor LEG', '2023-01-15', 100),
    ('Sensor Bici', '2023-02-10', 101),
    ('Sensor PECK', '2023-03-20', 102),
    ('Sensor EST', '2023-04-05', 103),
    ('Sensor ESC', '2023-05-12', 104),
    ('Sensor PantEmPé', '2023-06-18', 105),
    ('Sensor PantSentado', '2023-07-22', 106),
    ('Sensor RemBaixa', '2023-08-07', 107),
    ('Sensor RemCavalo', '2023-09-30', 108);
    
    select * from sensores;
    
    
	INSERT INTO historico (data_historico_ativo, data_historico_inativo, fk_sensor) VALUES
    ('2023-01-15 10:00:00', '2023-01-15 10:30:00', 50),
    ('2023-02-10 11:15:00', '2023-02-10 11:45:00', 50),
    ('2023-03-20 12:30:00', '2023-03-20 13:00:00', 50),
    ('2023-04-05 14:00:00', '2023-04-05 14:30:00', 51),
    ('2023-05-12 15:45:00', '2023-05-12 16:15:00', 51),
    ('2023-06-18 17:30:00', '2023-06-18 18:00:00', 51),
    ('2023-07-22 19:45:00', '2023-07-22 20:15:00', 52),
    ('2023-08-07 21:30:00', '2023-08-07 22:00:00', 52),
    ('2023-10-15 08:00:00', '2023-10-15 08:30:00', 53),
    ('2023-11-10 11:15:00', '2023-11-10 11:45:00', 53),
    ('2023-12-20 13:30:00', '2023-12-20 14:00:00', 53),
    ('2024-01-05 15:00:00', '2024-01-05 15:30:00', 54),
    ('2024-02-12 16:45:00', '2024-02-12 17:15:00', 54),
    ('2024-03-18 18:30:00', '2024-03-18 19:00:00', 54),
    ('2024-04-22 20:45:00', '2024-04-22 21:15:00', 55),
    ('2024-05-07 22:30:00', '2024-05-07 23:00:00', 55),
    ('2024-07-15 08:00:00', '2024-07-15 08:30:00', 56),
    ('2024-08-10 11:15:00', '2024-08-10 11:45:00', 56),  
    ('2024-09-20 13:30:00', '2024-09-20 14:00:00', 56),  
    ('2024-10-05 15:00:00', '2024-10-05 15:30:00', 57),  
    ('2024-11-12 16:45:00', '2024-11-12 17:15:00', 57),  
    ('2024-12-18 18:30:00', '2024-12-18 19:00:00', 57),   
    ('2025-01-22 20:45:00', '2025-01-22 21:15:00', 58),  
    ('2025-02-07 22:30:00', '2025-02-07 23:00:00', 58); 
  
    
    select * from historico;
    
    truncate table historico;
    
    
    INSERT INTO endereco (estado, cidade, cep, logradouro, numero, complemento, fk_academia) VALUES
    ('SP', 'São Paulo', '01234567', 'Rua da Amostra', '123', 'Lado ímpar', 500);
    
    select * from endereco;
    
    INSERT INTO telefone values
    (null, '11994229438', '940323310', 500);
    
    -- EXIBIR TODOS OS DADOS DAS TABELAS ACADEMIA, APARELHO, TIPO E GRUPO DE TREINO, ONDE O ID DA ACADEMIA REPRESENTA O CAMPO "FK_ACADEMIA" DA TABELA APARELHOS, O ID DA TABELA TIPO REPRESENTA O CAMPO "FK_TIPO_ID" DA TABELA 
    -- APARELHOS E O ID DA TABELA GRUPO DE TREINO REPRESENTA O CAMPO "FK_GRUPO_APARELHO" DA TABELA APARELHOS. 
    
    SELECT * FROM academia AS a JOIN aparelho AS ap ON a.academia_id = ap.fk_academia
		JOIN tipo AS t ON t.tipo_id = ap.fk_tipo_id
			JOIN grupo_de_treino AS gdt ON gdt.grupo_treino_id = ap.fk_grupo_aparelho;
            
            
	-- EXIBIR TODOS OS DADOS DA TABELA SENSORES EM CONJUNTO COM A TABELA HISTÓRICO ONDE O "CAMPO SENSOR_ID" DA TABELA SENSORES REPRESENTA O CAMPO "FK_SENSOR" DA TABELA HISTÓRICO
    
    SELECT * FROM sensores AS s JOIN historico AS h ON s.sensor_id = h.fk_sensor join academia;
    
    SELECT * FROM academia AS A JOIN endereco AS e on a.academia_id = e.fk_academia;
    
    SELECT data_historico_inativo, data_historico_ativo, TIMEDIFF(data_historico_inativo, data_historico_ativo) AS intervalo_tempo
FROM historico;


select  academia.Nome_academia, aparelho.nome_aparelho, grupo_de_treino.nome_grupo, SEC_TO_TIME(SUM(TIMEDIFF(data_historico_inativo, data_historico_ativo))) AS intervalo_tempo from
	academia join aparelho
		on fk_academia = Academia_id
			join grupo_de_treino 
				on fk_grupo_aparelho = grupo_treino_id
					join Sensores 
						on fk_academia = Academia_id
							join historico
								on fk_sensor = sensor_id
									where academia_id = 500
										GROUP BY academia.Nome_academia, aparelho.nome_aparelho, grupo_de_treino.nome_grupo;
                                    
                                    
		

