module.exports = async (ctx) => {
  const category = ctx.pUrl.parse(ctx.url).query.replace('category=', '');
  ctx.body = ctx.setStatus(300,await ctx.dbo.collection(`${category}Title`).find({}).toArray())
}