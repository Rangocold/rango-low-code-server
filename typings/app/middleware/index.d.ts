// This file is created by egg-ts-helper@1.30.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportCors = require('../../../app/middleware/cors');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    cors: typeof ExportCors;
  }
}
