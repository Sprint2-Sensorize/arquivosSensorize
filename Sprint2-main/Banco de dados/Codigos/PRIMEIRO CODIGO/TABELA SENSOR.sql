create table sensor (
    id_sensor int primary key auto_increment,
    data_istalacao timestamp default current_timestamp,
    descricao_sensor varchar(200),
    fk_historico int
)auto_increment = 400;

alter table sensor add constraint fkHistorico
	foreign key (fk_historico)
		references historico (id_historico);
        
        
        INSERT INTO sensor (descricao_sensor, fk_historico)
VALUES
    ('Sensor-1', 500),
    ('Sensor-2', 501),
    ('Sensor-3', 502),
    ('Sensor-4', 503),
    ('Sensor-5', 504),
    ('Sensor-6', 505),
    ('Sensor-7', 506),
    ('Sensor-8', 507),
    ('Sensor-9', 508),
    ('Sensor-10', 509);
        

select * from sensor;
desc sensor;



-- truncate table sensor;