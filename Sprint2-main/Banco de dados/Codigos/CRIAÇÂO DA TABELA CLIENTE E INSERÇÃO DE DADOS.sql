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
telefone char(11));


-- Adicionando a coluna para receber a FK
alter table cliente add column fk_endereco int;

-- ALTERANDO CAMPO PARA UM FK
alter table cliente add constraint fkEndereco
	foreign key (fk_endereco)
		references endereco (id_endereco);

-- INCERINDO DADOS 
INSERT INTO cliente (nome_academia, cnpj, representante, status_contrato, email, senha_acesso, telefone, fk_endereco)
VALUES
('Academia Físico Total', '12345678901234', 'João da Silva', 'Aberto', 'joao@academia.com', 'senha123', '1112345678', 100),
('FitExtreme Academia', '23456789012345', 'Maria Santos', 'Encerrado', 'maria@fitextreme.com', 'senha456', '2198765432', 101),
('PowerGym Fitness Center', '34567890123456', 'Carlos Pereira', 'Aberto', 'carlos@powergym.com', 'senha789', '3134567890', 102),
('Academia Athletic Life', '45678901234567', 'Ana Oliveira', 'Aberto', 'ana@athleticlife.com', 'senhaabc', '5198761234', 103);

select * from cliente;