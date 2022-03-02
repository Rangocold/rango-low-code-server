'use strict';

const yargs = require('yargs');
const { defaultDbHost, defaultDbPort, defaultDbName, defaultDbUser } = require('./consts');

function parseArgs() {
  const args = JSON.parse(yargs.argv._[0]);
  return {
    dbHost: args.dbHost || defaultDbHost,
    dbPort: args.dbPort || defaultDbPort,
    dbUser: args.dbUser || defaultDbUser,
    dbName: args.dbName || defaultDbName,
    dbPassword: args.dbPassword,
    githubKey: args.githubKey,
    githubSecret: args.githubSecret,
  }
}

/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const params = parseArgs();
  console.error('params: ', params);

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
    password: params.dbPassword,
    database: params.dbName,
  }

  /* config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'rango',
    password: '!QAZ2wsx',
    database: 'rango_low_code',
  } */

  config.passportGithub = {
    key: params.githubKey,
    secret: params.githubSecret,
    //key: '1b682793f38768c24ec7',
    //secret: '83687427858e27c9cecfc8a017444647941f43d6',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  }

  config.middleware = ['cors'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  console.error('config: ', config);

  return {
    ...config,
    ...userConfig,
  };
};
