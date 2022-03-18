module.exports = (options) => {
  return async (ctx, next) => {
    
    await next();
    //ctx.response.set('Access-Control-Allow-Origin', '*');
    //ctx.set('Access-Control-Allow-Origin', '*');
  }
}

