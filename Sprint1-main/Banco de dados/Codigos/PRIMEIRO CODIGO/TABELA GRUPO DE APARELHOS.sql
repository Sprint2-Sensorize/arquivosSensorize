create table grupo_aparelho (
    id_grupo int primary key auto_increment,
    nome_grupo varchar(45),
    fk_aparelho int) auto_increment = 200;
    
    alter table grupo_aparelho add constraint fk_Aparelho
		foreign key (fk_aparelho)
			references aparelho (id_aparelho);

alter table grupo_aparelho rename column fk_aparelho to fk_aparelho_grupo;
    
INSERT INTO grupo_aparelho (nome_grupo, fk_aparelho)
VALUES
    ('Grupo Supino Reto', 300),  -- Supino Reto
    ('Grupo Máquina de Extensão de Pernas', 301),  -- Máquina de Extensão de Pernas
    ('Grupo Cadeira Flexora', 302),  -- Cadeira Flexora
    ('Grupo Máquina de Pulldown', 303),  -- Máquina de Pulldown
    ('Grupo Barra Fixa', 304),  -- Barra Fixa
    ('Grupo Mesa Flexora', 305),  -- Mesa Flexora
    ('Grupo Banco Scott', 306),  
    ('Grupo Máquina de Elevação de Panturrilha', 307),  
    ('Grupo Máquina de Flexão de Pernas', 308),  
    ('Grupo Puxador Alto', 309); 

desc grupo_aparelho;
select * from grupo_aparelho;
-- drop table grupo_aparelho;
-- truncate grupo_aparelho;