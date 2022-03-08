'use strict';
const ConfigTabName = 'config_tab';
/* 
id
user_token
dsl
template_name
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
  queryConfigList: async(app, where) => {
    const columns = ['id', 'user_token', 'dsl', 'template_name', 'created_at', 'updated_at'];
    return await app.mysql.select(ConfigTabName, {
      where,
      columns,
      orders: []
    });
  }
}