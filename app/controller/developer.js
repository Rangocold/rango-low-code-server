const Controller = require('egg').Controller;
const { SuccessCode, FailCode } = require('../service/consts');

class DeveloperController extends Controller {
  async get() {
    try {
      const ctx = this.ctx;
      const query = {
        developer_id: ctx.user.id,
      };
      ctx.body = {
        code: SuccessCode,
        message: '',
        data: await ctx.model.developer.queryOneDeveloper(query),
      };
    } catch(e) {
      this.ctx.body = {
        message: '',
        code: FailCode,
        data: null,
      }
    }
  }

  async create() {
    try {
      const ctx = this.ctx;
      const developer = {
        developer_id: ctx.user.id,
        display_name: ctx.user.displayName,
        name: ctx.user.name,
        photo: ctx.user.photo,
        provider: ctx.user.provider,
      }
  
      await ctx.model.developer.createDeveloper(this.app, developer);
      ctx.body = {
        code: SuccessCode,
        message: '',
      }
    } catch(e) {
      this.ctx.body = {
        message: '',
        code: FailCode,
      }
    }
  }
}

module.exports = DeveloperController;