create database sensorize;

use sensorize;

create table endereco (
id_endereco int primary key auto_increment,
estado char (2),
cidade varchar (45),
cep char (9),
logradouro varchar(50),
numero varchar (20),
complemento varchar (50)) auto_increment = 100;

INSERT INTO endereco (estado, cidade, cep, logradouro, numero, complemento) VALUES
('SP', 'São Paulo', '01234-567', 'Avenida Paulista', '123', 'Subsolo 1'),
('RJ', 'Rio de Janeiro', '98765-432', 'Avenida Franca', '456', 'Andar 2'),
('MG', 'Belo Horizonte', '34567-890', 'Praça das Árvores', '789', 'Andar 3'),
('RS', 'Porto Alegre', '54321-098', 'Estrada da Bela', '1010', 'Andar 4');

select * from endereco;