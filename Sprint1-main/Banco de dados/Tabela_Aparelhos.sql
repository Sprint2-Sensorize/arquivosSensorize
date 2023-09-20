use techGym;
create table aparelhos (
id int primary key auto_increment,
equipamentos varchar (30),
funcao varchar (15),
treinos varchar (15)
);
insert into aparelhos (equipamentos, funcao, treinos) values
('bicicleta_ergometrica ','cardiovascular','cardiovascular'),
('eliptico','cardiovascular','cardiovascular'),
('step','cardiovascular','cardiovascular'),
('máquina_de_remo','cardiovascular','cardiovascular'),
('escada_rolante ','cardiovascular','cardiovascular')
;
insert into aparelhos (equipamentos, funcao, treinos) values
('cross_trainer','cardiovascular','cardiovascular'),
('spin_bike','cardiovascular','cardiovascular'),
('agachamento_smith','musculação','perna'),
('bench_press ','musculação','peito'),
('pulldown','musculação','costa'),
('puxada_alta','musculação','costa'),
('cadeira_extensora','musculação','perna')
;
insert into aparelhos (equipamentos, funcao, treinos) values
('cadeira_flexora','musculação','perna'),
('maquina_de_abdução_e_aduçao','musculação','perna'),
('maquina_de_flexão_de_pernas','musculação','perrna'),
('maquina_de_extensão_de_quadril','musculação','perna'),
('peck_deck ','musculação','peito'),
('maquina_de_rosca_direta','musculação','biceps'),
('triceps_pulldown','musculação','triceps'),
('leg_curl ','musculação','perna')
;
insert into aparelhos (equipamentos, funcao, treinos) values
('hack_squat ','musculação','perna'),
('leg_extension ','musculação','perna'),
('maquina_de_panturrilha','musculação','perna'),
('maquina_de_elevaçao_de_panturrilha','musculação','perna'),
('banco_scott ','musculação','biceps'),
('smith_machine ','musculação','perna'),
('racks_de_agachamento','musculação','perna'),
('halteres','musculação','livre')
;
insert into aparelhos (equipamentos, funcao, treinos) values
('pulleys','musculação','livre'),
('leg_press_45','musculação','perna'),
('leg_press_90','musculação','perna'),
('remada_cavalinho','musculação','costa'),
('aparelho_abdominal','musculação','abdômen'),
('aparelo_lombar','musculação','lombar')
;





describe aparelhos;
select * from aparelhos;
select equipamentos from aparelhos;
select funcao from aparelhos;
select treinos from aparelhos;
drop table aparelhos;




