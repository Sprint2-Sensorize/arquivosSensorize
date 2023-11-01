create table aparelhos_da_academia (
fk_academia int,
fk_grupo int
);


alter table aparelhos_da_academia add constraint fkAcademia
	foreign key (fk_academia)
		references academia (id_academia);
        
alter table aparelhos_da_academia add constraint fkAparelhoAcademia
    foreign key (fk_grupo)
		references grupo_aparelho (id_grupo);


        
INSERT INTO aparelhos_da_academia VALUES
(1, 200),
(1, 201),
(1, 203),
(1, 204),
(1, 205),
(1, 206),
(1, 207),
(1, 208),
(1, 209),
(2, 200),
(2, 201),
(2, 202),
(2, 203),
(2, 204),
(2, 206),
(2, 208),
(2, 209),
(3, 200),
(3, 201),
(3, 203),
(3, 204),
(3, 205),
(3, 206),
(3, 207),
(3, 208),
(3, 209),
(4, 200),
(4, 201),
(4, 202),
(4, 203),
(4, 204),
(4, 206),
(4, 208),
(4, 209);

desc aparelhos_da_academia;
select * from aparelhos_da_academia;