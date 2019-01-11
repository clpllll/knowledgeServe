module.exports = async (ctx,dbo) => {
  const subTitle = await dbo.collection("title").find({}).toArray();
  const obj = {}
  subTitle.forEach(el => {
    const { category } = el;
    delete el.category
    if (obj[category]) obj[category].push(el)
    else obj[category]=[el]
  });
  // console.log(obj)
  // ctx.body = [{ name: 'js', category: 'js' }, { name: "浏览器", category: "browser" }];
  ctx.body = obj
  
}