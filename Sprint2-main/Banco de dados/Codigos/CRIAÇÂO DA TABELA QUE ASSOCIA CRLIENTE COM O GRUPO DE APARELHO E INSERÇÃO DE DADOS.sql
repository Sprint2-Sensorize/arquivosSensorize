-- Associado o cliente ao grupo de apalhos que tem na sua academia
create table aparelhos_cliente (
    id_aparelhos_cliente int primary key auto_increment,
    fk_cliente int,
    fk_grupo int);
    
    
alter table aparelhos_cliente add constraint fkGrupo 
	foreign key (fk_grupo)
		references grupo_aparelho (id_grupo);



INSERT INTO aparelhos_cliente (fk_cliente, fk_grupo)
VALUES
(1, 1),  -- Cliente 1 associado ao Grupo de Aparelhos 1
(1, 2),  -- Cliente 1 associado ao Grupo de Aparelhos 2
(2, 3),  -- Cliente 2 associado ao Grupo de Aparelhos 3
(2, 4);  -- Cliente 2 associado ao Grupo de Aparelhos 4


select * from aparelhos_cliente;


