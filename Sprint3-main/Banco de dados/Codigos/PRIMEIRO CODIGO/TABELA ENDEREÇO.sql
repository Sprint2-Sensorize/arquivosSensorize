use sensorize;

create table endereco (
id_endereco int primary key auto_increment,
estado char (2),
cidade varchar (45),
cep char (9),
logradouro varchar(50),
numero varchar (20),
complemento varchar (50),
fk_cliente int) auto_increment = 100;


-- ALTERANDO CAMPO PARA UM FK
alter table endereco add constraint fkCliente
	foreign key (fk_cliente)
		references cliente (id_cliente);
        
    

INSERT INTO endereco (estado, cidade, cep, logradouro, numero, complemento, fk_cliente) VALUES
    ('SP', 'São Paulo', '01234-567', 'Avenida Paulista', '123', 'Subsolo 1', 1),
    ('RJ', 'Rio de Janeiro', '20000-123', 'Rua Copacabana', '456', 'Andar 4', 2),
    ('MG', 'Belo Horizonte', '30123-456', 'Rua da Liberdade', '789', 'Conjunto 101', 3),
    ('RS', 'Porto Alegre', '90010-567', 'Avenida Independência', '567', 'Loja', 4);



select * from endereco;
truncate endereco;