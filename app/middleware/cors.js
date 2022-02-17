module.exports = async (ctx, next) => {
  await next();

  ctx.set('Access-Control-Allow-Origin', 'localhost:3000');
}