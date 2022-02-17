'use strict';

const yargs = require('yargs');
const { defaultDbHost, defaultDbPort, defaultDbName, defaultDbUser } = require('./consts');

function parseArgs() {
  const args = yargs.argv;
  return {
    dbHost: args.dbHost || defaultDbHost,
    dbPort: args.dbPort || defaultDbPort,
    dbUser: args.dbUser || defaultDbUser,
    dbName: args.dbName || defaultDbName,
    dbPassword: args.dbPassword,
  }
}

/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const params = parseArgs();
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1644926832188_1105';

  // add your middleware config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: params.dbHost,
    port: params.dbPort,
    user: params.dbUser,
    passowrd: params.dbPassword,
    database: params.dbName,
  }

  config.middleware = ['cors'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
