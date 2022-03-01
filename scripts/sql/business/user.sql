create table user_tab (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  usr_nam text not null,
  age int not null,
  sex char(1) not null,
  birthdate date not null,
  remarks text not null,
  updated_time timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_time timestamp default current_timestamp,
  primary key (id)
);