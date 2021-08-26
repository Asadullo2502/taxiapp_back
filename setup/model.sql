CREATE DATABASE taxiapp;
CREATE EXTENSION pgcrypto;



create table users (
	user_id serial not null primary key,
	phone_number varchar(12) not null,
	password varchar(60) not null,
	firstname varchar(24) not null,
	lastname varchar(24) not null
);

create table states (
	state_id serial not null primary key,
	name varchar(32) not null
);

create table cars (
	car_id serial not null primary key,
	name varchar(32) not null
);

create table classifieds (
	classified_id serial not null primary key,
	from_id int not null references states(state_id),
	to_id int not null references states(state_id),
	car_id int not null references cars(car_id),
	user_id int not null references users(user_id),
	price decimal(16, 2),
	is_hiring varchar(10) default '1'
);

select * from find(from_id, to_id, is_hiring, max_price, car_id);
