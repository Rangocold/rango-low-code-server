const Controller = require('egg').Controller;
const { isNil } = require('lodash');
const { SuccessCode, FailCode } = require('../../service/consts');

const AntSortAscend = 'ascend';
const AntSortDescend = 'descend';
const AntSortNull = null;

const SortAsc = 'asc';
const SortDesc = 'desc';

function parseSorter(sorter) {
  if (!isNil(sorter) && sorter.order !== AntSortNull) {
    const order = [];
    if (sorter.order === AntSortAscend) {
      order.push([sorter.field, SortAsc])
    } else if (sorter.order === AntSortDescend) {
      order.push([sorter.field, SortDesc])
    }
    return order;
  } else {
    return undefined;
  }
}

function parsePagination(pagination) {
  if (isNil(pagination)) {
    return {
      offset: undefined,
      limit: undefined,
    }
  }
  return {
    offset: pagination.pageNumber ? (pagination.pageNumber - 1) * 10 : undefined,
    //limit: pagination.pageSize ? pagination.pageSize : undefined,
    limit: 10,
  }
}

class UserController extends Controller {
  async list() {
    try {
      const ctx = this.ctx;
      const where = ctx.request.body.filter;
      const order = parseSorter(ctx.request.body.sorter);
      const { offset, limit } = parsePagination(ctx.request.body.pagination);
      ctx.body = {
        code: SuccessCode,
        message: '',
        data: await ctx.service.business.user.queryUserList(this.app, where, order, limit, offset),
      };
    } catch(e) {
      this.ctx.body = {
        code: FailCode,
        message: '',
        data: [],
      }
    }
    
  }

  async create() {
    try {
      const ctx = this.ctx;
      const row = {
        name: ctx.request.body.name,
        age: ctx.request.body.age,
        sex: ctx.request.body.sex,
        birthdate: ctx.request.body.birthdate,
        remarks: ctx.request.body.remarks,
      }
      ctx.body = {
        code: SuccessCode,
        message: '',
        data: await ctx.service.business.user.insertOneUser(this.app, row),
      };
    } catch(e) {
      console.error('error: ', e);
      this.ctx.body = {
        code: FailCode,
        message: '',
      };
    }   
  }
}

module.exports = UserController;