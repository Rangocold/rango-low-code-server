'use strict';
/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router } = app;
  app.passport.mount('github');

  app.router.resources('configs', '/configs', app.controller.config);
};
