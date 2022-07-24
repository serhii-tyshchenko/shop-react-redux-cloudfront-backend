## SQL script for creating tables with data

```
create table products (
  id uuid not null default uuid_generate_v4() primary key,
  title text not null,
  description text,
  price integer
);

create table stocks (
    product_id uuid REFERENCES products (id),
    count integer
);

create extension if not exists "uuid-ossp";

insert into products (title, description, price) values ('Product 1', 'Product 1 description', 100)
insert into products (title, description, price) values ('Product 2', 'Product 2 description', 200)
insert into products (title, description, price) values ('Product 3', 'Product 3 description', 300)
insert into products (title, description, price) values ('Product 4', 'Product 4 description', 400)
insert into products (title, description, price) values ('Product 5', 'Product 5 description', 500)

insert into stocks (product_id, count) values ('0d5abb7e-1449-4b0b-b244-5bcf7c799420', 10)
insert into stocks (product_id, count) values ('03cede84-f426-4223-bbea-d2293b5918d7', 20)
insert into stocks (product_id, count) values ('481fd276-d96e-4596-9a58-88e8b9129c19', 30)
insert into stocks (product_id, count) values ('636758e3-cd12-4003-959d-ce43d225a0d9', 40)
insert into stocks (product_id, count) values ('949256a0-664a-4c8a-a33d-7fedc5667a83', 50)
```
