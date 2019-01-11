const { decrypt1, decrypt } = require('../util/crypto')
const { setToken } = require('../util/token')
module.exports = async (ctx) => {
  const data = ctx.request.body
  const { name, password } = data;
  if (!name || !password) {
    ctx.body =  ctx.setStatus(102)
    return 
}
  const user = await ctx.dbo.collection("user").find({ userName: name }).toArray()
  if (!user.length || decrypt1(user[0].password) !== decrypt(password)) {
  ctx.body =  ctx.setStatus(101)
  return 
  }
  const token = setToken({ userName: name, password });
  const obj = {
    userName: name,
    // password,
    token
  }
  ctx.body =  ctx.setStatus(100,obj);
}