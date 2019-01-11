//获取文章数据
// const
module.exports = async (ctx) => {
  const type = ctx.request.query.type; 
  ctx.body = ctx.setStatus(500,await ctx.dbo.collection(type).find({}).toArray())
}