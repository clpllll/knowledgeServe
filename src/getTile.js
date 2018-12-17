module.exports = async (ctx, dbo) => {
  ctx.body = await dbo.collection("title").find({}).toArray();
}