//获取文章数据
// const
module.exports = async (ctx, dbo) => {
  const type = ctx.request.query.type; 
  // ctx.body = ctx.request.query;
  ctx.body = await dbo.collection(type).find({}).toArray();
}