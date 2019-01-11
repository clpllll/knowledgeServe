const {getUser}=require('../util/token')
module.exports = async (ctx) => {
  const data = ctx.request.header;
  const token = data['x-auth-token'];
  const obj = getUser(token)
  delete obj.password;
  const user = await ctx.dbo.collection("user").find(obj).toArray();
  ctx.body = user.length?ctx.setStatus(200,obj):ctx.setStatus(201)
}