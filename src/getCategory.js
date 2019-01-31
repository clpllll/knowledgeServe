module.exports = async (ctx) => {
  const category = ctx.pUrl.parse(ctx.url).query.replace('category=', '');
  const subTitle = await ctx.dbo.collection(`${category}Title`).find({}).toArray();
  const obj = {}
  subTitle.forEach(el => {
    const { category } = el;
    delete el.category
    if (obj[category]) obj[category].push(el)
    else obj[category]=[el]
  });
  ctx.body = ctx.setStatus(400,obj)
  
}