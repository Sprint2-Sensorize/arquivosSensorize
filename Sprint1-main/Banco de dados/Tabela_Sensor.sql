use techGym;
create table sensoresPowerFit (
id int primary key auto_increment,
sensorAparelho varchar (40),
statusSensor varchar (10)
constraint chkstatusSensor check (statusSensor in('ativo','inativo'))
);
insert into sensoresPowerFit (sensorAparelho,statusSensor) values
('esteira','ativo'),
('bicicleta_ergometrica','ativo'),
('eliptico','ativo'),
('step','ativo'),
('máquina_de_remo','ativo'),
('escada_rolante ','ativo'),
('cross_trainer','ativo'),
('spin_bike','ativo')
;
insert into sensoresPowerFit (sensorAparelho,statusSensor) values
('agachamento_smith','ativo'),
('bench_press ','ativo'),
('pulldown','ativo'),
('puxada_alta','ativo'),
('cadeira_extensora','ativo'),
('cadeira_flexora','ativo'),
('maquina_de_abdução_e_aduçao','ativo'),
('maquina_de_flexão_de_pernas','ativo'),
('maquina_de_extensão_de_quadril','ativo'),
('peck_deck ','ativo'),
('maquina_de_rosca_direta','ativo')
;
insert into sensoresPowerFit (sensorAparelho,statusSensor) values
('triceps_pulldown','ativo'),
('leg_curl ','ativo'),
('hack_squat ','ativo'),
('leg_extension ','ativo'),
('maquina_de_panturrilha','ativo'),
('maquina_de_elevaçao_de_panturrilha','ativo'),
('banco_scott ','ativo'),
('smith_machine ','ativo'),
('racks_de_agachamento','ativo'),
('halteres','ativo'),
('pulleys','ativo'),
('leg_press_45','ativo'),
('leg_press_90','ativo'),
('remada_cavalinho','ativo'),
('aparelho_abdominal','ativo'),
('aparelo_lombar','ativo')
;

select * from sensoresPowerFit;
select sensorAparelho from sensoresPowerFit;
select sensorAparelho , statusSensor from sensoresPowerFit;