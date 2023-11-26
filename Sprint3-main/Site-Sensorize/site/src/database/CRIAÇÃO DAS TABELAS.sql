-- drop database sensorize;


CREATE DATABASE sensorize;

USE sensorize;


-- -------------------------------------------------------------------CRIANDO TABELA REPRESENTANTE------------------------------------------------------------------------------

CREATE TABLE representante (
    representante_id INT primary key AUTO_INCREMENT,
	nome_representante VARCHAR(50),
	senha_acesso VARCHAR(50),
	email_acesso VARCHAR(100)) auto_increment = 56275;

/*ALTER TABLE representante_login
	add constraint fk_academia_representante
		foreign key (fk_academia)
			references academia(academia_id); */

insert into representante (nome_representante, senha_acesso, email_acesso) values
('José Silva', '@adm123', 'adm@gmail.com');

select * from representante;

-- -------------------------------------------------------------------CRIANDO TABELA ACADEMIA------------------------------------------------------------------------------
CREATE TABLE academia(
	Academia_id INT PRIMARY KEY AUTO_INCREMENT,
	Nome_academia VARCHAR(45),
	cnpj VARCHAR(20),
	inicio_contrato DATE,
	Status_contrato VARCHAR(10),
	fim_contrato DATE,
    fk_representante int);

alter table academia add constraint
	foreign key (fk_representante)
    references representante(representante_id);

INSERT INTO academia (Nome_academia, Cnpj, inicio_contrato, Status_contrato, fim_contrato, fk_representante)VALUES
    ('Coliseu Fit', '00.312.222/1234-56,', '2023-01-15', 'Ativo', '2025-01-15', 56275);

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
	fk_academia INT) auto_increment = 100;

alter table endereco add constraint fkAcademia
	foreign key (fk_academia)
		references academia (Academia_id);

INSERT INTO endereco (estado, cidade, cep, logradouro, numero, complemento, fk_academia) VALUES
    ('SP', 'São Paulo', '01234567', 'Rua da Amostra', '123', 'Lado ímpar', 1);

select * from endereco;

-- -------------------------------------------------------------------CRIANDO TABELA TELEFONE------------------------------------------------------------------------------
CREATE TABLE telefone(
id_telefone INT primary key AUTO_INCREMENT,
fixo char(15),
celular char(15),
fk_academia int,
constraint fk_academia foreign key (fk_academia) references academia(academia_id))auto_increment = 200;

/*alter table telefone add constraint
	check(tipo in('Celular', 'Fixo'));*/

INSERT INTO telefone values
    (null, '1141396647', '11994229438', 1);

select * from telefone;

-- -------------------------------------------------------------------CRAINDO A TABELA TIPO------------------------------------------------------------------------------

CREATE TABLE tipo_aparelho(
	tipo_id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    grupo_treino varchar (45)) auto_increment = 2000;

alter table tipo_aparelho add constraint
	check(grupo_treino in('Inferior','Superior','Cárdio'));

INSERT INTO tipo_aparelho (nome, grupo_treino) VALUES
    ('Leg-Press', 'Inferior'),
    ('Peck Deck', 'Superior'),
    ('Bicicleta Ergométrica', 'Cárdio'),
    ('Esteira', 'Cárdio'),
    ('Escada', 'Cárdio'),
    ('Panturrilha em pé', 'Inferior'),
    ('Panturrilha sentado', 'Inferior'),
    ('Remada baixa', 'Superior'),
    ('Remada cavalinho', 'Superior');

select * from tipo_aparelho;


-- -------------------------------------------------------------------CRIANDO TABELA SENSOR ------------------------------------------------------------------------------


CREATE TABLE sensores(
	sensor_id INT PRIMARY KEY AUTO_INCREMENT,
	descricao_sensor VARCHAR(45),
	Data_Instalacao DATE) auto_increment = 1001;

/*ALTER TABLE sensores add constraint fk_aparelho
	foreign key (fk_Aparelho)
		references aparelho(aparelho_id);*/

INSERT INTO sensores (descricao_sensor, Data_Instalacao) VALUES
    ('Tcrt5000 - Leg-Press 1', '2023-02-01'),
    ('Tcrt5000 - Peck Deck 1', '2023-02-01'),
    ('Tcrt5000 - Bicicleta Ergométrica 1', '2023-02-01'),
    ('Tcrt5000 - Esteira 1', '2023-02-01'),
    ('Tcrt5000 - Escada 1', '2023-02-01'),
    ('Tcrt5000 - Panturrilha em pé 1', '2023-02-01'),
    ('Tcrt5000 - Panturrilha sentado 1', '2023-02-01'),
    ('Tcrt5000 - Remada baixa 1', '2023-02-01'),
    ('Tcrt5000 - Remada cavalinho 1', '2023-02-01');




select * from sensores;
-- truncate table sensores;

-- -------------------------------------------------------------------CRIANDO TABELA APARELHO------------------------------------------------------------------------------

CREATE TABLE aparelho (
    aparelho_id INT AUTO_INCREMENT,
	nome_aparelho VARCHAR(45),
	fk_tipo_aparelho INT,
    fk_academia INT,
    fk_sensor INT,
	PRIMARY KEY (aparelho_id, fk_tipo_aparelho))auto_increment = 500;

ALTER TABLE aparelho add constraint fkTipo
	foreign key (fk_tipo_aparelho)
		references tipo_aparelho(tipo_id);

alter table aparelho add constraint fkAcademiaa
	foreign key (fk_academia)
		references academia(Academia_id);

alter table aparelho add constraint
	foreign key(fk_sensor)
    references sensores (sensor_id);



desc aparelho;


   INSERT INTO aparelho (aparelho_id, nome_aparelho, fk_tipo_aparelho, fk_academia, fk_sensor) VALUES
    (500, 'Leg-Press 1', 2000, 1, 1001),
    (501, 'Peck Deck 1', 2001, 1, 1002),
    (502, 'Bicicleta Ergométrica 1', 2002, 1, 1003),
    (503, 'Esteira 1', 2003, 1, 1004),
    (504, 'Escada 1', 2004, 1, 1005),
    (505, 'Panturrilha em pé 1', 2005, 1, 1006),
    (506, 'Panturrilha sentado 1', 2006, 1, 1007),
    (507, 'Remada baixa 1', 2007, 1, 1008),
    (508, 'Remada cavalinho 1', 2008, 1, 1009);

select *  from aparelho;

desc aparelho;


-- -------------------------------------------------------------------CRIANDO TABELA HISTORICO ------------------------------------------------------------------------------

CREATE TABLE historico (
	id_historico INT AUTO_INCREMENT,
	tempo_uso_segundos int,
	fk_sensor INT,
    data_hora_historico timestamp default current_timestamp,
	PRIMARY KEY (id_historico, fk_sensor)) auto_increment = 700;


INSERT INTO historico (tempo_uso_segundos, fk_sensor)
VALUES
    (4200, 1003),
    (3100, 1004),
    (3600, 1005),
	(3500, 1003),
    (3800, 1004),
    (3000, 1005),
	(4000, 1003),
    (3200, 1004),
    (2800, 1005);

    INSERT INTO historico (tempo_uso_segundos, fk_sensor)
VALUES
    (6201, 1002),
    (2010, 1002),
    (2602, 1008),
	(3552, 1008),
    (8810, 1009),
    (5000, 1009),
	(4051, 1008),
    (3205, 1009),
    (800, 1002);


use sensorize;
-- ------------------------------------------------- CRIANDO TABELA HISTORICO TEMPORARIO -----------------------------------------------------------------

create table historico_temp (
	hist_temp_id int primary key auto_increment,
    registro_ocp int,
    fk_sensor int);

select * from historico_temp;

alter table historico_temp add constraint
	foreign key (fk_sensor)
    references sensores(sensor_id);

-- -------------------------------------------------------------------------------------------------------------------------------------------------------

select * from historico_temp;

insert into historico_temp values
(null,0,1005),
(null,0,1004),
(null,0,1003),
(null,0,1002),
(null,0,1001);

ALTER TABLE historico add constraint fk_sensor
	foreign key (fk_sensor)
		references sensores(sensor_id);




/*select t.grupo_treino, sec_to_time(sum(h.tempo_uso_segundos)) from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            group by grupo_treino;

select * from tipo_aparelho;
select * from aparelho;
select * from sensores;
select * from historico;
select * from representante;
select * from academia;
select * from telefone;


select r.nome_representante as nome, r.email_acesso as email, a.nome_academia as academia, a.cnpj, t.fixo, t.celular, ap.nome_aparelho as aparelho, tipo.grupo_treino as grupo from
	representante as r join academia as a
							on r.representante_id = a.fk_representante
						join telefone as t
							on t.fk_academia = a.academia_id
						join aparelho as ap
							on ap.fk_academia = a.academia_id
						join tipo_aparelho as tipo

							on fk_tipo_aparelho = tipo_id;

select a.nome_aparelho, grupo_treino from aparelho as a  join tipo_aparelho
													on fk_tipo_aparelho = tipo_id;


select t.grupo_treino, a.nome_aparelho, h.data_hora_historico as data_hora, sec_to_time(h.tempo_uso_segundos) as tempo from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where fk_academia = 1
                            group by nome_aparelho;


select t.grupo_treino, sec_to_time(sum(h.tempo_uso_segundos)) from
	tipo_aparelho as t join aparelho as a
							on a.fk_tipo_aparelho = t.tipo_id
                        join sensores as s
							on a.fk_sensor = s.sensor_id
						join historico as h
							on h.fk_sensor = s.sensor_id
                            where fk_academia = 1
                            group by grupo_treino;

use sensorize;

select t.grupo_treino, a.nome_aparelho, h.data_hora_historico as data_hora, sec_to_time(h.tempo_uso_segundos) as tempo from
        tipo_aparelho as t join aparelho as a on a.fk_tipo_aparelho = t.tipo_id join sensores as s on a.fk_sensor = s.sensor_id join historico as h on h.fk_sensor = s.sensor_id
        where fk_academia = 1 group by nome_aparelho;