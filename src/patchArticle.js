module.exports = async (ctx,ObjectId ) => {
  const data = ctx.request.body;
  const ids = { _id: ObjectId(data._id) };
  const ipdate ={$set: { content: data.content, name: data.name,...ids }};
  const result = await ctx.dbo.collection(data.type).find(ids).toArray()
  if (result.length) {
    await ctx.dbo.collection(data.type).updateOne(ids, ipdate);
    ctx.body = ctx.setStatus(800);
  } else ctx.body = ctx.setStatus(801);
}