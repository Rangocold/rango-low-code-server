'use strict';
const ConfigTabName = 'config_tab';
/* 
id
user_token
dsl
created_at
updated_at
*/
module.exports = {
  createConfig: async(app, config) => {
    return await app.mysql.insert(ConfigTabName, config);
  },
  updateOneConfig: async(app, config, options) => {
    return await app.mysql.update(ConfigTabName, config, options);
  },
  queryConfigList: async(app, where, columns, orders) => {
    return await app.mysql.select(ConfigTabName, {
      where,
      columns,
      orders,
      limit,
      offset,
    });
  }
}