module.exports = async (ctx) => {
  ctx.body = ctx.request.body
  const obj = {
    name: ctx.body.name,
    content:ctx.body.content
  }
  const type = ctx.body.type
  let res;
  const newObj = { title: obj.name,category:type }
  //增加分类
  const title = await ctx.dbo.collection("title").find(newObj).toArray();
  if (!title.length) ctx.dbo.collection("title").insertOne(newObj);
  //增加文章
  res = await ctx.dbo.collection(type).find({ name: obj.name }).toArray()
  if (res.length) {
    ctx.setStatus(602)
    return
  }
  res = await ctx.dbo.collection(type).insertOne(obj)
  ctx.body = res.insertedCount?ctx.setStatus(600):ctx.setStatus(601);
}