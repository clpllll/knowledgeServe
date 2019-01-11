module.exports = async (ctx) => {
  ctx.body = ctx.setStatus(300,await ctx.dbo.collection("title").find({}).toArray())
}