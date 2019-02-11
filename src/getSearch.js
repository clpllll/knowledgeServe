module.exports = async (ctx) => {
  const key = ctx.request.query.key;
  const all = await ctx.dbo.collection('generalities').find({}).toArray();
  const arr = all.map(async item => await ctx.dbo.collection(`${item.value}Title`).find({ title: { $regex: key } }).toArray());
  const result = await Promise.all(arr)
  let aa = [];
  result.forEach((item, index) => {
    aa = [...aa, ...item.map(val => {
      val.type = all[index].value;
      return val
    })]
  })
  ctx.body = ctx.setStatus(1100,aa)
}