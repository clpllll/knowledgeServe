const statusCode = {
  "200":"添加成功",
  "2001": "文章已存在",
  "2002":"添加失败"
}
module.exports = async (ctx, dbo) => {
  ctx.body = ctx.request.body
  const obj = {
    name: ctx.body.name,
    content:ctx.body.content
  }
  const type = ctx.body.type
  let res;
  const resObj = {};
  const newObj = { title: obj.name,category:type }
  //增加分类
  const title = await dbo.collection("title").find(newObj).toArray();
  if (!title.length) dbo.collection("title").insertOne(newObj);
  //增加文章
  res = await dbo.collection(type).find({ name: obj.name }).toArray()
  if (res.length) {
    resObj.code = 2001;
    resObj.message = obj.name+statusCode['1001'];
    return
  }
  res = await dbo.collection(type).insertOne(obj)
  if (res.insertedCount) {
    resObj.code = 200;
    resObj.message = "添加成功";
  }
  else {
    resObj.code = 2002;
    resObj.message = "添加失败";
  }
  ctx.body = resObj;
}