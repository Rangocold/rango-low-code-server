const Controller = require('egg').Controller;

class ConfigController extends Controller {
  async list() {
    try {
      const ctx = this.ctx;
      const where = {
        usr_token: this.ctx.user.id,
      }
      ctx.body = {
        message: '',
        code: SuccessCode,
        data: await ctx.service.config.queryConfigList(this.app, where),
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
        usr_token: ctx.user.id,
        dsl: ctx.query.dsl,
        template_name: ctx.user.templageName,
      }
      await ctx.service.config.createConfig(this.app, row);
      ctx.body = {
        message: '',
        code: SuccessCode,
      };
    } catch(e) {
      this.ctx.body = {
        message: '',
        code: FailCode,
      }
    }
  }

  async update() {
    try {
      const ctx = this.ctx;
      const config = ctx.query;
      const options = {
        where: {
          id: ctx.query.id,
        }
      }
      await ctx.service.config.updateOneConfig(this.app, config, options);
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

module.exports = ConfigController;