'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  /* cors: {
    enable: true,
    package: 'egg-cors',
  }, */
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  /* sequelize: {
    enable: true,
    package: 'egg-sequelize',
  }, */
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  passportGithub: {
    enable: true,
    package: 'egg-passport-github',
  },
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};
