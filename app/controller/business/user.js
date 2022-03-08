const Controller = require('egg').Controller;
const { isNil } = required('lodash');

const AntSortAscend = 'ascend';
const AntSortDescend = 'descend';
const AntSortNull = null;

const SortAsc = 'asc';
const SortDesc = 'desc';

function parseSorter(sorter) {
  const order = [];
  if (!isNil(ctx.query.order) && ctx.query.order.order !== AntSortNull) {
    if (ctx.query.order.order === AntSortAscend) {
      order.push([ctx.query.order.column, SortAsc])
    } else if (ctx.query.order.order === AntSortDescend) {
      order.push([ctx.query.order.column, SortDesc])
    }
  }
  return order;
}

function parsePagination(pagination) {
  return {
    offset: (pagination.pageNum - 1) * pagination.pageSize,
    limit: pagination.pageSize,
  }
}

class UserController extends Controller {
  async getAll() {
    const ctx = this.ctx;
    const where = ctx.query.filter;
    const order = parseSorter(ctx.query.sorter);
    const { offset, limit } = parsePagination(ctx.query.pagination);
    ctx.body = await ctx.service.business.user.queryUserList(this.app, where, order, limit, offset);
  }

  async insertOneUser() {
    const ctx = this.ctx;
    const row = {
      name: ctx.query.name,
      age: ctx.query.age,
      sex: ctx.query.sex,
      birthdate: ctx.query.birthdate,
      remark: ctx.query.remark,
    }
    ctx.body = await ctx.service.business.user.insertOneUser(this.app, row);
  }
}

module.exports = UserController;