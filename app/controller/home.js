'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.redirect('/rango_low_code/');
  }
}

module.exports = HomeController;
