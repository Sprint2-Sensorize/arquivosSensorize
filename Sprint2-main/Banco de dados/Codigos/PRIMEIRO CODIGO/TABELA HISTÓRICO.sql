-- Associado o cliente ao grupo de apalhos que tem na sua academia
create table historico (
    id_historico int primary key auto_increment,
	tempo_uso time,
    tempo_livre time,
    data_historico datetime) auto_increment = 500;
    
    INSERT INTO historico (tempo_uso, tempo_livre, data_historico)
VALUES
    ('00:45:30', '00:14:30', '2023-09-25 08:30:00'),
    ('00:32:15', '00:27:45', '2023-09-25 09:45:00'),
    ('00:55:20', '00:10:40', '2023-09-25 10:30:00'),
    ('01:10:45', '00:19:15', '2023-09-25 11:45:00'),
    ('00:40:30', '00:24:30', '2023-09-25 13:00:00'),
    ('01:05:15', '00:20:45', '2023-09-25 14:15:00'),
    ('00:52:20', '00:17:40', '2023-09-25 15:30:00'),
    ('01:20:45', '00:15:15', '2023-09-25 16:45:00'),
    ('00:48:30', '00:23:30', '2023-09-25 18:00:00'),
    ('01:15:15', '00:12:45', '2023-09-25 19:15:00');
    



select * from historico;


