const { decrypt, encrypt } = require('../util/crypto')
const { setToken } = require('../util/token')
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
  const token = setToken({ userName: name, password });
  const add = await dbo.collection("user").insertOne({ userName: name, password: encrypt(decrypt(password)),token })
  add.code = 0;
  // add.token = token;
  ctx.body = add;
}