create table developer (
  developer_id varchar(32) not null,
  display_name varchar(32),
  name varchar(32),
  photo varchar(512),
  provider char(4),
  updated_time timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_time timestamp default current_timestamp,
  primary key (developer_id)
)