create table sensor (
    id_sensor int primary key auto_increment,
    data_hora timestamp default current_timestamp,
    tempo_uso time,
    tempo_livre time,
    descricao_sensor varchar(200)
)auto_increment = 200;


INSERT INTO sensor (data_hora, tempo_uso, tempo_livre, descricao_sensor)
VALUES
('2023-09-24 10:00:00', '01:30:00', '02:00:00', 'Sensor 1 na Esteira'),
('2023-09-24 11:30:00', '00:45:00', '01:15:00', 'Sensor 2 na Bicicleta Ergométrica'),
('2023-09-24 13:15:00', '02:15:00', '00:30:00', 'Sensor 3 na Máquina de Pernas'),
('2023-09-24 15:00:00', '01:00:00', '01:45:00', 'Sensor 4 no Banco de Supino');


truncate table sensor;