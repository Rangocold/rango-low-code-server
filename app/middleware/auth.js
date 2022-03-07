const authUrl = '/passport/github';
const authCallbackUrl = '/passport/github/callback';
module.exports = (options) => {
  return async (ctx, next) => {
    debugger;
    if (ctx.path === authCallbackUrl) {
      await next();
    } else if (ctx.isAuthenticated() || ctx.request.url === authUrl) {
      await next();
    } else {
      ctx.redirect(authUrl);
    }
  }
}

