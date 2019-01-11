module.exports = async (ctx) => {
  const subTitle = await ctx.dbo.collection("title").find({}).toArray();
  const obj = {}
  subTitle.forEach(el => {
    const { category } = el;
    delete el.category
    if (obj[category]) obj[category].push(el)
    else obj[category]=[el]
  });
  ctx.body = ctx.setStatus(400,obj)
  
}