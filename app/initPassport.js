'use strict';

const passport = require('passport');
const md5 = require('md5');
const WechatStrategy = require('passport-wechat');

module.exports = (app) => {
  app.passport.use(new WechatStrategy({
      /* appID: {APPID},
      name:{默认为wechat,可以设置组件的名字}
      appSecret: {APPSECRET},
      client:{wechat|web},
      callbackURL: {CALLBACKURL},
      scope: {snsapi_userinfo|snsapi_base},
      state:{STATE},
      getToken: {getToken},
      saveToken: {saveToken} */
    },
    function(accessToken, refreshToken, profile, done) {
      return done(err, profile);
    },
  ));
  app.passport.verify(async (ctx, user) => {
    // 拿到用户对象，返回用户对象
    return { token: md5(user.id) };
  });
  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx, user) => {
    // 处理 user
    // ...
    // return user;
  });

  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx, user) => {
    // 处理 user
    // ...
    // return user;
  });
}