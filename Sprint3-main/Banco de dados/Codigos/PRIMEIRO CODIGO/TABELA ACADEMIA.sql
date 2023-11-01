create database sensorize;

use sensorize;

drop database sensorize;

-- Criaçao da tabela cliente 
create table cliente (
id_cliente int primary key auto_increment,
nome_academia varchar(50),
cnpj char(14) not null unique,
representante varchar(50),
inicio_contrato timestamp default current_timestamp,
status_contrato varchar (10) constraint chkStatus check (status_contrato in ('Aberto','Encerrado')),
email varchar (100) unique,
senha_acesso varchar (100) not null,
telefone char(11);


-- ALTERANDO CAMPO PARA UM FK
alter table cliente add constraint fkAparelho
	foreign key (fk_aparelho)
		references aparelho(id_aparelho);

-- INCERINDO DADOS 
INSERT INTO cliente (nome_academia, cnpj, representante, status_contrato, email, senha_acesso, telefone, fk_aparelho) VALUES
('FitClub Gym', '12345678901234', 'Amanda Silva', 'Aberto', 'amanda@fitclubgym.com', 'senha123', '1112345678'),
('GymMaster Fitness', '23456789012345', 'Rafael Santos', 'Aberto', 'rafael@gmmaster.com', 'senha456', '2198765432'),
('Elite Fitness Center', '34567890123456', 'Patricia Pereira', 'Aberto', 'patricia@elitefitnes.com', 'senha789', '3134567890'),
('BodyTech', '45678901234567', 'Lucas Oliveira', 'Encerrado', 'lucas@bodyteh.com', 'senhaabc', '5198761234');



select * from cliente;
show tables;
truncate cliente;