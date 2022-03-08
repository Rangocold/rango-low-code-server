// This file is created by egg-ts-helper@1.30.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfig = require('../../../app/controller/config');
import ExportDeveloper = require('../../../app/controller/developer');
import ExportHome = require('../../../app/controller/home');
import ExportBusinessUser = require('../../../app/controller/business/user');

declare module 'egg' {
  interface IController {
    config: ExportConfig;
    developer: ExportDeveloper;
    home: ExportHome;
    business: {
      user: ExportBusinessUser;
    }
  }
}
