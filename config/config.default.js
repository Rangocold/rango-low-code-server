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
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1644926832188_1105';

  // add your middleware config here
  config.middleware = ['cors', 'auth'];

  config.mysql = {
    client: {
      host: params.dbHost,
      port: params.dbPort,
      password: params.dbPassword,
      database: params.dbName,
      user: params.dbUser,
      debug: true,
    },
    app: true,
    agent: false,
  }

  config.passportGithub = {
    key: params.githubKey,
    secret: params.githubSecret,
    callbackURL: 'rango-low-code-server/passport/github/callback',
    proxy: true,
  }

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.logger = {
    dir: '/Users/chenzhitao/Desktop/rango/rango-low-code/rango-low-code-server/log',
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
