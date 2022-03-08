const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async getConfigList() {
    const ctx = this.ctx;
    const where = {
      usr_token: this.ctx.user.id,
    }
    ctx.body = await ctx.service.config.queryConfigList(this.app, where);
  }

  async createConfig() {
    const ctx = this.ctx;

    const row = {
      usr_token: ctx.user.id,
      dsl: ctx.query.dsl,
      template_name: ctx.user.templageName,
    }
    ctx.body = await ctx.service.config.createConfig(this.app, row);
  }

  async updateConfig() {
    const ctx = this.ctx;
    const config = ctx.query;
    const options = {
      where: {
        id: ctx.query.id,
      }
    }
    ctx.body = await ctx.service.config.updateOneConfig(this.app, config, options);
  }
}

module.exports = ConfigController;