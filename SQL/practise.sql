Create table cars(
	brand varchar(255),
	model varchar(255),
	year int
);

select * from cars;

insert into cars(brand,model,year)
values('ford','mustang',1964),
	('toyota','cilica','1975'),
('inova','crysta',1999);

alter table cars
add color varchar(255);

update cars
set color='red'
where brand='toyota';

alter table cars
alter column year type varchar(50);

alter table cars
alter column color type varchar(30);