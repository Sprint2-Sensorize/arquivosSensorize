create table A (
idA int auto_increment,
fkAA int,
primary key(idA, fk_b),
nome varchar (45),
data_a date,
fk_B int) auto_increment = 100;

alter table A add primary key(idA, fkAA);

drop table A;

alter table A add constraint fk_AA
	foreign key (fkAA)
		references A (idA);
        
alter table A add constraint fkB
	foreign key (fk_B)
		references B (idB);


create table B (
idB int,
nome varchar (45),
data_b date);

alter table B add primary key (idB);

create table C (
idC int,
nome varchar (45),
data_c date,
fk_B int);

alter table C add primary key (idC);

alter table C add constraint fkbb
	foreign key (fk_B)
		references B (idB);
        
alter table A auto_increment = 100;

alter table C auto_increment = 3000;

insert into A (idA, nome, data_a, fk_b, fkAA) values 
	(101, 'gaby', '1998-05-20', 50, 100),
    (102, 'Boby', '1998-05-20', 51, 101);
    
    select * from C;

desc B;
    
insert into B (idB, nome, data_b) values 
	(50, 'Jonathan', '1998-05-05'),
    (51, 'Gi', '1998-04-09'),
    (52, 'Leticia', '1957-05-05');
    
    
insert into C values
	(3000, 'Ferando', '1998-05-05', 50),
    (3001, 'Pedro', '1998-05-05', 51),
    (3002, 'Maria', '1998-05-05', '52');
    
    
select * from C;


select * from A as a_a 2
    





