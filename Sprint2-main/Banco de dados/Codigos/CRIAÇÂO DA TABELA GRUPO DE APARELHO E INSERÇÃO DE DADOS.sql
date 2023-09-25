create table grupo_aparelho (
    id_grupo int primary key auto_increment,
    nome_grupo varchar(45),
    fk_aparelho int,
    quantidade_aparelho int) auto_increment = 1000;
    
    alter table grupo_aparelho add constraint fkAparelho
		foreign key (fk_aparelho)
			references aparelho (id_aparelho);



INSERT INTO grupo_aparelho (nome_grupo, fk_aparelho, quantidade_aparelho)
VALUES
	('Grupo Esteira', 300, 5),
	('Grupo Bicicleta', 301, 3),
	('Grupo Leg press', 302, 4),
	('Grupo Peck Deck', 303, 2);


select * from grupo_aparelho;
