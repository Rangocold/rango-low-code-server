module.exports = async (ctx, next) => {
  if (ctx.user.id) {
    await next();
  } else {
    ctx.redirect('/auth');
  }
}