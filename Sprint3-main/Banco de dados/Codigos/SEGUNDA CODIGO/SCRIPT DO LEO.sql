CREATE DATABASE pesquisa_inovacao;
USE pesquisa_inovacao;

CREATE TABLE representante (
	id_representante INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(64),
    cpf CHAR(11)
);

CREATE TABLE academia (
	id_academia INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(128),
    fk_representante INT,
    CONSTRAINT fk_representante_academia
		FOREIGN KEY (fk_representante) REFERENCES representante (id_representante)
) AUTO_INCREMENT = 200;

CREATE TABLE aparelho (
	id_aparelho INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (128),
    fk_academia INT,
    CONSTRAINT fk_academia_aparelho
		FOREIGN KEY (fk_academia) REFERENCES academia (id_academia)
 ) AUTO_INCREMENT = 400;
 
 -- AQUI HAVERIA UMA TABELA INTERMEDIÁRIA ENTRE APARELHO E USO, SERIA A TABELA DE SENSOR
 -- A TABELA USO É UM EXEMPLO. NO SEU MODELO DE DADOS, HÁ PROVAVELMENTE UMA TABELA CHAMADA REGISTRO
 -- ELA IRÁ MARCAR A ENTRADA E SAÍDA DO APARELHO DE ACORDO COM O SENSOR DE BLOQUEIO
 
 CREATE TABLE uso (
	id_uso INT PRIMARY KEY AUTO_INCREMENT,
    horario_inicio DATETIME,
    horario_fim DATETIME,
    fk_aparelho INT,
	CONSTRAINT fk_aparelho_uso
		FOREIGN KEY (fk_aparelho) REFERENCES aparelho (id_aparelho)
 ) AUTO_INCREMENT = 1000;
 
 -- Dados da Academia da Vivian
INSERT INTO representante VALUE
(NULL, 'Vivian', '12345678901');

INSERT INTO academia VALUE
(NULL, 'Academia da Vivian', 1);

INSERT INTO aparelho VALUES 
(NULL, 'Esteira RDX', 200),
(NULL, 'Bicicleta Nimbus 2000', 200),
(NULL, 'Aparelho Remador', 200);

INSERT INTO uso VALUES
(NULL, '2023-10-24 13:23:50', '2023-10-24 14:01:11', 400),
(NULL, '2023-10-24 14:03:12', '2023-10-24 14:31:43', 400),
(NULL, '2023-10-24 14:36:51', '2023-10-24 15:06:00', 400),

(NULL, '2023-10-24 10:00:51', '2023-10-24 11:15:52', 401),
(NULL, '2023-10-24 11:19:43', '2023-10-24 11:49:07', 401),
(NULL, '2023-10-24 11:51:13', '2023-10-24 12:15:22', 401),

(NULL, '2023-10-24 13:11:28', '2023-10-24 13:41:07', 402),
(NULL, '2023-10-24 13:46:32', '2023-10-24 14:07:26', 402),
(NULL, '2023-10-24 14:08:51', '2023-10-24 14:20:11', 402);

-- PODEMOS CONSEGUIR ALGUMAS RESPOSTAS POR MEIO DE SELECTS USANDO AS SEGUINTES FUNÇÕES NATIVAS DO MYSQL
-- TIMESTAMPDIFF(tipo, inicio, fim)
-- DATE_ADD(inicio, INTERVAL qtdTempo tipo)
-- DATE_SUB(inicio, INTERVAL qtdTempo tipo)

-- TIMESTAMPDIFF
-- O objetivo dele é retornar de acordo com duas datas passadas, a quantidade de tempo
-- de diferença entre elas no formato que você pedir. 
-- Exemplo:
SELECT 
	a.nome,
    SEC_TO_TIME(SUM(TIMESTAMPDIFF(SECOND, u.horario_inicio, u.horario_fim))) AS tempo_de_uso
FROM
	aparelho a
JOIN
	uso u ON u.fk_aparelho = a.id_aparelho;

-- Se você desejar calcular em outras unidades de tempo, você pode substituir MINUTE pelo tipo 
-- de unidade desejado, como HOUR para horas, SECOND para segundos, etc.


-- DATE_ADD
-- O objetivo dele é retornar de acordo com duas datas passadas, a soma de
-- dois tempos.
-- Exemplo:
SELECT 
	a.nome,
    DATE_ADD(u.horario_inicio, INTERVAL 45 MINUTE) AS saida_estimada
FROM
	aparelho a
JOIN
	uso u ON u.fk_aparelho = a.id_aparelho;
    
-- Neste caso, o tempo previsto de uso do aparelho seria 45 minutos, logo
-- estima-se cada usuário sairia do aparelho no horário de saída estimada



-- DATE_SUB
-- O objetivo dele é retornar de acordo com duas datas passadas, a subtração
-- de dois tempos
-- Exemplo:
SELECT 
	a.nome,
    DATE_SUB(u.horario_fim, INTERVAL 45 MINUTE) AS inicio_estimado
FROM
	aparelho a
JOIN
	uso u ON u.fk_aparelho = a.id_aparelho;
    
-- Neste caso, o tempo previsto de uso do aparelho seria 45 minutos, logo
-- estima-se cada usuário tenha usado o aparelho desde o horário de início estimado
