module.exports = (options) => {
  return async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin', '*');
    await next();
  
    //ctx.set('Access-Control-Allow-Origin', '*');
  }
}

