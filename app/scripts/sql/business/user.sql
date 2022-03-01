create table user_tab {
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  name text not null,
  updated_time timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_time timestamp default current_timestamp,
  primary key (id)
}