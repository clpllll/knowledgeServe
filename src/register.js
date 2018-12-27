const { decrypt, encrypt } = require('../util/crypto')
module.exports = async (ctx, dbo) => {
  const data = ctx.request.body;
  const { name, password } = data;
  if (!name || !password) {
    ctx.body = {code:1001,messge:"用户名密码不能为空"}
    return 
  }
  const user = await dbo.collection("user").find({ userName: name }).toArray()
  if (user.length) {
    ctx.body = {code:1002,messge:"用户名已存在"}
    return 
  }
  const add = await dbo.collection("user").insertOne({ userName: name, password: encrypt(decrypt(password)) })
  add.code = 0;
  ctx.body = add;
}