'use strict';
const passport = require('passport');
const initPassport = required('./initPassport');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  initPassport(app);
  const { router } = app;
  router.get('/auth', passport.authenticate('wechat'));

  app.router.resources('configs', '/configs', app.controller.config);


};
