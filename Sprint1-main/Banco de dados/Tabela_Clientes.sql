create database techGym;
use techGym;
create table clientes (
id int primary key auto_increment,
nomeAcademia varchar (30),
cnpj char(14),
representante varchar (20),
inicioContrato date,
statusContrato varchar (10) constraint chkStatus check (statusContrato in ('Aberto','Encerrado')),
fimContrato date,
email varchar (60),
telefone varchar (11)
);

insert into clientes (nomeAcademia,cnpj,representante,inicioContrato,statusContrato,fimContrato,email,telefone) values
('PowerFit Academy','36506966000142','Jessica Reis','2023-09-01','Aberto',null,'jessicareis@powerfitacademy.com
','11287578291'),
('IronPulse Gym','90851383000102','Maria Piazentin','2023-08-29','Aberto',null,'mariapiazentin@ironpulsegym.com
','11211827522'),
('ShapeMasters','50358617000151','Levi Felix','2023-08-27','Aberto',null,'levifelix@shapemasters.com
','11273829243'),
('FitnessFusion','41555154000127','Wellington Inacio','2023-09-02','Aberto',null,'wellingtoninacio@fitnessfusion.com
','11293293239'),
('GymDynasty','00195237000175','João Dantas','2023-09-02','Aberto',null,'joaodantas@gymdynasty.com
','11453434321'),
('FlexZone Fitness','67518509000100','Francisco Almeida','2023-08-27','Aberto',null,'franciscoalmeida@flexzonefitness.com
','11923232321'),
('BodyCrafters','15980553000125','Gabriela de Campos','2023-08-26','Aberto',null,'gabrieladecampos@bodycrafters.com
','11987346536'),
('VitalityVault','74019816000101', 'Dagoberto Galhardo','2023-09-04','Aberto',null,'dagobertogalhardo@vitalityvault.com
','11234563421'),
('EliteShape Studio','52091138000147','Amanda Coutinho','2023-09-04','Aberto',null,'amandacoutinho@eliteshape.com
','11454321232'),
('FitRevolution','17026876000100','Guilherme Kenuy','2023-08-19','Aberto',null,'guilhermekenuy@fitrevolution.com
','11435343432'),
('PulsePro Gym','86202145000190','Pedro de Souza','2023-08-20','Aberto',null,'pedrodesouza@pulsepro.com
','11342039212')
;

select * from clientes;
select nomeAcademia from clientes;
select cnpj from clientes;
select representante from clientes;
select inicioContrato from clientes;
select statusContrato from clientes;
select fimContrato from clientes;
select email from clientes;
select telefone from clientes;
describe clientes;

drop table clientes;
