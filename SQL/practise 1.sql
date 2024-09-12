SELECT count(distinct brand) FROM cars


select distinct * from cars
where brand='ford';


select distinct * from cars
order by model desc
limit 1 offset 1;

select  max(year) as min_year
from cars;

select  count(year)
from cars
where model='volvo'
	
select * from cars
where model ilike 'c_y___';



select * from cars
where year between '1960' and '1998'
order by model;

select brand b from cars ;

select brand || ' ' || model as "my car" from cars;


