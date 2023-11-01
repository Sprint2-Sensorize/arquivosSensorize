


create table aparelho (
	id_aparelho int primary key auto_increment,
    nome_aparelho varchar (45),
    fk_sensor int,
	tipo_aparelho varchar (10) constraint
		chkTipo check
			(tipo_aparelho in ('Superior','Inferior', 'Cárdio'))) auto_increment = 300;
            
            
alter table aparelho add constraint fkSensor
	foreign key (fk_sensor)
		references sensor(id_sensor);
    

INSERT INTO aparelho (nome_aparelho, fk_sensor, tipo_aparelho) VALUES
    ('Supino Reto', 400, 'Superior'),
    ('Máquina de Extensão de Pernas', 401, 'Inferior'),
    ('Cadeira Flexora', 402, 'Inferior'),
    ('Máquina de Pulldown', 403, 'Superior'),
    ('Barra Fixa', 404, 'Superior'),
    ('Mesa Flexora', 405, 'Inferior'),
    ('Banco Scott', 406, 'Superior'),
    ('Máquina de Elevação de Panturrilha', 407, 'Inferior'),
    ('Máquina de Flexão de Pernas', 408, 'Inferior'),
    ('Puxador Alto', 409, 'Superior');

    
select * from aparelho;

-- truncate aparelho;

desc aparelho;