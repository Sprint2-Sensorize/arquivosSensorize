
create table aparelho (
	id_aparelho int primary key auto_increment,
    nome_aparelho varchar (45),
    fk_sensor int,
	tipo_aparelho varchar (10) constraint
		chkTipo check
			(tipo_aparelho in ('Posterior','Inferior', 'Cárdio'))) auto_increment = 300;
            
            
alter table aparelho add constraint fkSensor
	foreign key (fk_sensor)
		references sensor(id_sensor);

INSERT INTO aparelho (nome_aparelho, fk_sensor, tipo_aparelho) VALUES
	('Esteira', 200, 'Cárdio'),
	('Bicicleta Ergométrica', 201, 'Cárdio'),
	('Leg press', 202, 'Inferior'),
	('Peck Deck', 203, 'Posterior');

select * from aparelho;

desc aparelho;