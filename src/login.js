const { decrypt1, decrypt }=require('../util/crypto')
module.exports = async (ctx, dbo) => {
  const data = ctx.request.body
  const { name, password } = data;
  if (!name || !password) {
    ctx.body = {code:1001,messge:"用户名密码不能为空"}
    return 
}
  const user = await dbo.collection("user").find({ userName: name }).toArray()
  if (!user.length || decrypt1(user[0].password) !== decrypt(password)) {
  ctx.body = {code:1002,messge:"用户名密码错误"}
  return 
  }
  ctx.body=user[0]
}