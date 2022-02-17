const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async getAll() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.query.limit,
      offset: ctx.query.offset,
    };
    ctx.body = await ctx.model.User.findAll(query);
  }
}

module.exports = ConfigController;