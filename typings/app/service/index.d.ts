// This file is created by egg-ts-helper@1.30.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportConfig = require('../../../app/service/config');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    config: AutoInstanceType<typeof ExportConfig>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
