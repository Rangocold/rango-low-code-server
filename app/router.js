'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  app.passport.mount('github');

  app.router.post('config/list', app.controller.config.list);
  app.router.post('config//create', app.controller.config.create);
  app.router.post('config/update', app.controller.config.update);

  app.router.post('developer/create', app.controller.developer.create);
  app.router.post('developer/get', app.controller.developer.get);

  app.router.post('business.user/create', app.controller.business.user.create);
  app.router.post('business/user/list', app.controller.business.user.list);
};
