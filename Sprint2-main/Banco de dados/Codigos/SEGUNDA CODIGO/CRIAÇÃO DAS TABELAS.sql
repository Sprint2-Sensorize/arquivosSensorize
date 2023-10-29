
CREATE DATABASE sensorize;
USE sensorize;
-- -------------------------------------------------------------------CRIANDO TABELA ACADEMIA------------------------------------------------------------------------------
CREATE TABLE academia(
	Academia_id INT PRIMARY KEY AUTO_INCREMENT,
		Nome_academia VARCHAR(45),
			cnpj VARCHAR(20),
				inicio_contrato DATE,
					Status_contrato VARCHAR(10),
						fim_contrato DATE)auto_increment = 500;
                        
                        
INSERT INTO academia (Nome_academia, Cnpj, inicio_contrato, Status_contrato, fim_contrato)VALUES
    ('Coliseu Fit', '00.312.222/1234-56,', '2023-01-15', 'Ativo', '2024-01-15');
    
 select * from academia;
 
-- -------------------------------------------------------------------CRIANDO TABELA ENDEREÇO------------------------------------------------------------------------------
 CREATE TABLE endereco (
    endereco_id INT PRIMARY KEY AUTO_INCREMENT,
        estado CHAR(2),
            cidade VARCHAR(45),
                cep CHAR(10),
                    logradouro VARCHAR(100),
                        numero VARCHAR(45),
                            complemento VARCHAR(45),
								fk_academia INT);
                                
alter table endereco add constraint fkAcademia
	foreign key (fk_academia)
		references academia (Academia_id);
                                
INSERT INTO endereco (estado, cidade, cep, logradouro, numero, complemento, fk_academia) VALUES
    ('SP', 'São Paulo', '01234567', 'Rua da Amostra', '123', 'Lado ímpar', 500);
    
select * from endereco; 
   
-- -------------------------------------------------------------------CRIANDO TABELA TELEFONE------------------------------------------------------------------------------
CREATE TABLE telefone(
id_telefone INT AUTO_INCREMENT,
	telefone char(14),
		celular char(14),
			fk_academia int,
				constraint fk_academia foreign key (fk_academia) references academia(academia_id),
					primary key (id_telefone, fk_academia))auto_increment = 100;
                    
INSERT INTO telefone values
    (null, '11994229438', '940323310', 500);

select * from telefone;

-- -------------------------------------------------------------------CRIANDO TABELA REPRESENTANTE------------------------------------------------------------------------------

CREATE TABLE representante_login (
    id_representante INT AUTO_INCREMENT,
        nome_usuario VARCHAR(50),
            senha_acesso VARCHAR(50),
                email_acesso VARCHAR(100),
                    fk_academia INT,
                        PRIMARY KEY (id_representante, fk_academia)) auto_increment = 200;
                        
ALTER TABLE representante_login 
	add constraint fk_academia_representante 
		foreign key (fk_academia) 
			references academia(academia_id);

insert into representante_login (nome_usuario, senha_acesso, email_acesso, fk_academia) values
('José Silva', '@adm123', 'adm@gmail.com', 500);

select * from representante_login;

-- -------------------------------------------------------------------CRAINDO A TABELA TIPO------------------------------------------------------------------------------

CREATE TABLE tipo(
	tipo_id INT PRIMARY KEY AUTO_INCREMENT,
		nome VARCHAR(45))auto_increment = 300;

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

-- -------------------------------------------------------------------CRIANDO TABELA APARELHO------------------------------------------------------------------------------

CREATE TABLE aparelho (
    aparelho_id INT AUTO_INCREMENT,
        fk_tipo INT,
			grupo_treino VARCHAR(20),
				nome_aparelho VARCHAR(45),
					fk_academia INT,
						PRIMARY KEY (aparelho_id, fk_tipo))auto_increment = 400;
                        
alter table aparelho add constraint chkTipo
	check(grupo_treino in('Cardio', 'Inferior', 'Superior'));

ALTER TABLE aparelho add constraint fkTipo
	foreign key (fk_tipo)
		references tipo(tipo_id);
        
alter table aparelho add constraint fkAcademiaa
	foreign key (fk_academia)
		references academia(Academia_id);
        
desc aparelho;

        
    INSERT INTO aparelho (nome_aparelho, fk_tipo, grupo_treino, fk_academia) VALUES
    ('Leg press azul', 300, 'Inferior', 500),
    ('Bicicleta Ergométrica Porta', 302, 'Cardio', 500),
    ('Peck Deck novo', 301, 'Superior', 500),
    ('Esteira vermelha', 303, 'Cardio', 500),
    ('Escada Janela', 304, 'Cardio', 500),
    ('Panturrilha em pé verde', 306, 'Inferior', 500),
    ('Panturrilha sentado amarela', 306, 'Inferior', 500),
    ('Remada baixa nova', 307, 'Superior', 500),
    ('Remada cavalinho Antiga', 308, 'Superior', 500);
        
select *  from aparelho;

desc aparelho;
        
-- -------------------------------------------------------------------CRIANDO TABELA SENSOR ------------------------------------------------------------------------------


CREATE TABLE sensores(
	sensor_id INT PRIMARY KEY AUTO_INCREMENT,
		descricao_sensor VARCHAR(45),
			fk_Aparelho int,
				Data_Instalacao DATE) auto_increment = 600;
                
ALTER TABLE sensores add constraint fk_aparelho
	foreign key (fk_Aparelho)
		references aparelho(aparelho_id);
        
   insert into sensores (descricao_sensor, data_instalacao, fk_aparelho) values
    ('Sensor Tcrt5000 LEG', '2023-01-15', 400),
    ('Sensor Tcrt5000 Bici', '2023-02-10', 401),
    ('Sensor Tcrt5000 PECK', '2023-03-20', 402),
    ('Sensor Tcrt5000 EST', '2023-04-05', 403),
    ('Sensor Tcrt5000 ESC', '2023-05-12', 404),
    ('Sensor Tcrt5000 PantEmPé', '2023-06-18', 405),
    ('Sensor Tcrt5000 PantSentado', '2023-07-22', 406),
    ('Sensor Tcrt5000 RemBaixa', '2023-08-07', 407),
    ('Sensor Tcrt5000 RemCavalo', '2023-09-30', 408);
    
select * from sensores;

-- -------------------------------------------------------------------CRIANDO TABELA HISTORICO ------------------------------------------------------------------------------
CREATE TABLE historico (
    id_historico INT AUTO_INCREMENT,
        data_historico_ativo datetime default current_timestamp,
            data_historico_inativo datetime default current_timestamp,
                fk_sensor INT,
                     PRIMARY KEY (id_historico, fk_sensor)) auto_increment = 700;
                     

ALTER TABLE historico add constraint fk_sensor
	foreign key (fk_sensor)
		references sensores(sensor_id);
        
INSERT INTO historico (data_historico_ativo, data_historico_inativo, fk_sensor) VALUES
    ('2023-10-24 13:23:50', '2023-10-24 14:01:11', 600),
	('2023-10-24 13:24:13', '2023-10-24 13:35:05', 601),
    ('2023-10-24 13:40:25', '2023-10-24 13:48:47', 602),
    ('2023-10-24 13:50:17', '2023-10-24 13:51:14', 603),
    ('2023-10-24 14:00:09', '2023-10-24 14:09:15', 604),
    ('2023-10-24 14:10:07', '2023-10-24 14:17:28', 605),
    ('2023-10-24 14:20:57', '2023-10-24 14:29:45', 606),
    ('2023-10-24 14:30:19', '2023-10-24 14:32:48', 607),
    ('2023-10-24 14:40:06', '2023-10-24 14:49:05', 608);
    
INSERT INTO historico (data_historico_ativo, data_historico_inativo, fk_sensor) VALUES
    ('2023-10-24 18:31:00', '2023-10-24 18:35:10', 600),
    ('2023-10-24 18:43:00', '2023-10-24 18:45:02', 601),
    ('2023-10-24 19:00:00', '2023-10-24 19:05:05', 602),
    ('2023-10-24 19:15:30', '2023-10-24 19:20:50', 603),
    ('2023-10-24 19:30:10', '2023-10-24 19:35:30', 604),
    ('2023-10-24 19:45:00', '2023-10-24 19:50:00', 605),
    ('2023-10-24 20:00:00', '2023-10-24 20:05:20', 606),
    ('2023-10-24 20:15:05', '2023-10-24 20:20:58', 607),
    ('2023-10-24 20:30:00', '2023-10-24 20:35:00', 608);
        
select * from historico;    


