create table page_cfg (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  dsl text not null,
  usr_tkn char(32) not null,
  updated_time timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_time timestamp default current_timestamp,
  primary key (id)
)