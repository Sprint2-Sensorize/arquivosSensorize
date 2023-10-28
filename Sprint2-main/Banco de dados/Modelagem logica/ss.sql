use sprint2;

create table tabelaB (
	TabelaB_id int primary key auto_increment,
    nome varchar (45),
    fk_BB int);
    
create table tabelaA (
	TabelaA_id int,
    fk_B int,
    primary key (TabelaA_id, fk_B),
    nome varchar (45));
    
alter table tabelaA auto_increment = 100;
    
alter table tabelaA add constraint fkB
	foreign key (fk_B)
		references TabelaB(TabelaB_id);
        
alter table tabelaB add constraint fkBB
	foreign key (fk_BB)
		references tabelaB (TabelaB_id);
        
insert into tabelaB values 
	(null, 'Jonathan', null),
    (null, 'Felipe', 1);
    
select * from TabelaB;

select * from
	TabelaB as tb
		join TabelaB as tbb
			on tb.fk_BB = tbb.TabelaB_id;
	