module.exports = async(ctx) => {
  const result = await ctx.dbo.collection('generalities').find({}).toArray();
  // const promiseAll = result.map(val=>ctx.dbo.collection(`${val.value}Title`).find({}).toArray())
  // const children = await Promise.all(promiseAll)
  // result.forEach((val,index) => {
  //   val.children = children[index]
  // });
  const obj = {};
  result.forEach(val => {
    obj[val.value] = val
  });
  ctx.body = ctx.setStatus(1000,obj);
}