'use strict';
const UserTabName = 'user_tab';
/* 
id
name
age
sex
birthdate
remark
*/

// for business interface
module.exports = {
  queryOneUser: async(app, query) => {
    return await app.mysql.get(UserTabName, query);
  },

  /*   where: { status: 'draft', author: ['author1', 'author2'] }, // WHERE 条件
  columns: ['author', 'title'], // 要查询的表字段
  orders: [['created_at','desc'], ['id','desc']], // 排序方式
  limit: 10, // 返回数据量
  offset: 0, // 数据偏移量 */
  queryUserList: async(app, where, orders, limit, offset) => {
    const columns = ['id', 'name', 'age', 'sex', 'birthdate', 'remark'];
    return await app.mysql.select(UserTabName, {
      where,
      columns,
      orders,
      limit,
      offset,
    });
  },

  /* const row = {
  id: 123,
  name: 'fengmk2',
  otherField: 'other field value',    // any other fields u want to update
  modifiedAt: this.app.mysql.literals.now, // `now()` on db server
}; */
  updateUser: async(app, row) => {
    return await app.mysql.update(UserTabName, row);
  },

  /* const row = {
  name: 'fengmk2',
  otherField: 'other field value',    // any other fields u want to update
  modifiedAt: this.app.mysql.literals.now, // `now()` on db server
};

const options = {
  where: {
    custom_id: 456
  }
};
 */
  updateSomeUser: async(app, row, options) => {
    return await app.mysql.update(UserTabName, row, options);
  },

  /*  */
  deleteOneUser: async(app, query) => {
    return await app.mysql.delete(UserTabName, query);
  },

  insertOneUser: async(app, row) => {
    return await app.mysql.insert(UserTabName, row);
  },
}