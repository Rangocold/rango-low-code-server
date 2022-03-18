'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const github = app.passport.authenticate('github', {});
  app.router.get('/rango-low-code-server/passport/github', github);
  app.router.get('/rango-low-code-server/passport/github/callback', github);


  app.router.post('/rango-low-code-server/config/list', app.controller.config.list);
  app.router.post('/rango-low-code-server/config//create', app.controller.config.create);
  app.router.post('/rango-low-code-server/config/update', app.controller.config.update);

  app.router.post('/rango-low-code-server/developer/create', app.controller.developer.create);
  app.router.post('/rango-low-code-server/developer/get', app.controller.developer.get);

  app.router.post('/rango-low-code-server/business/user/create', app.controller.business.user.create);
  app.router.post('/rango-low-code-server/business/user/list', app.controller.business.user.list);

  app.router.post('/business/user/list', app.controller.business.user.list);
};

