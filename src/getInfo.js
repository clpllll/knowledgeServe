const {getUser}=require('../util/token')
module.exports = async (ctx, dbo) => {
  const data = ctx.request.header;
  const token = data['x-auth-token'];
  const obj = getUser(token)
  delete obj.password;
  const user = await dbo.collection("user").find(obj).toArray();
  if (user.length) ctx.body = obj; 
  else ctx.body = {
    code: 1003,
    message:'过期'
  }
}