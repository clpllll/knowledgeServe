module.exports = async (ctx,dbo,ObjectId ) => {
  // console.log('patch', ctx.request.body)
  const data = ctx.request.body;
  // console.log(data._id,{_id:data._id})
  const ids = { _id: ObjectId(data._id) };
  const ipdate ={$set: { content: data.content, name: data.name,...ids }};
  const result = await dbo.collection(data.type).find(ids).toArray()
  // console.log(result)
  const obj = {};
  if (!result.length) {
    obj.code = 3001;
    obj.message = "文章不存在";
  } else {
    const result = await dbo.collection(data.type).updateOne(ids, ipdate);
    obj.code = 200;
    obj.message = "添加成功";
    obj.data = result;
  }
  ctx.body = obj
  // return ctx.body
}