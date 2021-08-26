const GET_SQL = `
	select
      u.firstname || '  ' || u.lastname as full_name,
      u.phone_number,
		fs.name as from,
		ts.name as to,
		c.price,
		car.name as car,
		car.car_id,
		case
			when c.is_hiring = '1' then 'Bugun'
			else c.is_hiring
		end as available
	from
		classifieds as c
   join
      users as u on u.user_id = c.user_id
	join
		states as fs on c.from_id = fs.state_id
	join
		states as ts on c.to_id = ts.state_id
	join
		cars as car using(car_id)
	where
		c.is_hiring <> '0' and c.from_id = $1 and c.to_id = $2
	order by
		available asc
`
const GET_SQL_TRUE = `
	select
      u.firstname || '  ' || u.lastname as full_name,
      u.phone_number,
		fs.name as from,
		ts.name as to,
		c.price,
		car.name as car,
		car.car_id,
		case
			when c.is_hiring = '1' then 'Bugun'
			else c.is_hiring
		end as available
	from
		classifieds as c
      join
      users as u on u.user_id = c.user_id
	join
		states as fs on c.from_id = fs.state_id
	join
		states as ts on c.to_id = ts.state_id
	join
		cars as car using(car_id)
	where
		c.is_hiring <> '0' and c.from_id = $1 and c.to_id = $2 and c.car_id = $3
	order by
		available asc
`
const GET_SQL_CAR = `
	select
      u.firstname || '  ' || u.lastname as full_name,
      u.phone_number,
		fs.name as from,
		ts.name as to,
		c.price,
		car.name as car,
		car.car_id,
		case
			when c.is_hiring = '1' then 'Bugun'
			else c.is_hiring
		end as available
	from
		classifieds as c
      join
      users as u on u.user_id = c.user_id
	join
		states as fs on c.from_id = fs.state_id
	join
		states as ts on c.to_id = ts.state_id
	join
		cars as car using(car_id)
	where
		c.is_hiring <> '0' and c.car_id = $1
	order by
		available asc
`
const GET_SQL_ALL = `
	select
      u.firstname || '  ' || u.lastname as full_name,
      u.phone_number,
		fs.name as from,
		ts.name as to,
		c.price,
		car.car_id,
		car.name as car,
		case
			when c.is_hiring = '1' then 'Bugun'
			else c.is_hiring
		end as available
	from
		classifieds as c
      join
      users as u on u.user_id = c.user_id
	join
		states as fs on c.from_id = fs.state_id
	join
		states as ts on c.to_id = ts.state_id
	join
		cars as car using(car_id)
	where
		c.is_hiring <> '0' 
	order by
		available asc
`

const WORK = `
	UPDATE classifieds
	SET
		is_hiring = $1
	where user_id = $2
	RETURNING *
`

const DRIVER = `
	SELECT 
		*
	FROM classifieds
	where user_id = $1
`

const CONFIG = `
	UPDATE classifieds
	SET
	   from_id = $1,
		to_id = $2,
		car_id = $3,
		price = $4,
		is_hiring = $5
	where user_id = $6
	RETURNING *
`

const CLASSIFIEDS = `
  select
		c.price,
		car.name as car,
      u.firstname || ' ' || u.lastname as full_name,
      u.phone_number,
		case
			when c.is_hiring = '1' then 'Bugun'
			else c.is_hiring
		end as available
	from
		classifieds as c
	inner join
		users as u on u.user_id = c.user_id
	inner join
		cars as car using(car_id)
	where
		c.is_hiring <> '0' and c.from_id = $1 and c.to_id = $2 and c.car_id = $3
	order by
		available asc
`

module.exports = {
   GET_SQL_ALL,
   GET_SQL,
   GET_SQL_CAR,
   GET_SQL_TRUE,
   WORK,
   DRIVER,
   CONFIG,
   CLASSIFIEDS
}