// This file is created by egg-ts-helper@1.30.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportConfig = require('../../../app/service/config');
import ExportDeveloper = require('../../../app/service/developer');
import ExportBusinessUser = require('../../../app/service/business/user');

declare module 'egg' {
  interface IService {
    config: AutoInstanceType<typeof ExportConfig>;
    developer: AutoInstanceType<typeof ExportDeveloper>;
    business: {
      user: AutoInstanceType<typeof ExportBusinessUser>;
    }
  }
}
