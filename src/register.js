const { decrypt, encrypt } = require('../util/crypto')
const { setToken } = require('../util/token')
module.exports = async (ctx) => {
  const data = ctx.request.body;
  const { name, password } = data;
  if (!name || !password) {
    ctx.body = ctx.setStatus(702)
    return 
  }
  const user = await ctx.dbo.collection("user").find({ userName: name }).toArray()
  if (user.length) {
    ctx.body = ctx.setStatus(701)
    return 
  }
  const token = setToken({ userName: name, password });
  const add = await ctx.dbo.collection("user").insertOne({ userName: name, password: encrypt(decrypt(password)),token })
  ctx.body = ctx.setStatus(700,add);
}