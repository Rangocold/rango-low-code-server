const Controller = require('egg').Controller;

class DeveloperController extends Controller {
  async getAll() {
    const ctx = this.ctx;
    const query = {
      limit: ctx.query.limit,
      offset: ctx.query.offset,
    };
    ctx.body = await ctx.model.developer.findAll(query);
  }
}

module.exports = DeveloperController;