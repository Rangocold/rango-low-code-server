'use strict';
const DeveloperTabName = 'developer';
/*   developer_id varchar(32) not null,
  display_name varchar(32),
  name varchar(32),
  photo varchar(512),
  provider char(4),
  updated_time timestamp default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_time timestamp default current_timestamp, */
module.exports = {
  createDeveloper: async(app, config) => {
    return await app.mysql.insert(DeveloperTabName, config);
  },
  queryOneDeveloper: async(app, query) => {
    return await app.mysql.get(DeveloperTabName, query);
  },
  updateDeveloper: async(app, row) => {
    return await app.mysql.update(DeveloperTabName, row);
  },
  updateSomeDeveloper: async(app, row, options) => {
    return await app.mysql.update(DeveloperTabName, row, options);
  },
  deleteOneDeveloper: async(app, query) => {
    return await app.mysql.delete(DeveloperTabName, query);
  },
}