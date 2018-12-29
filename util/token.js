const jwt = require('jwt-simple');
const secret = "aabbcc"
const setToken = (obj) => {
  return  jwt.encode(obj, secret);
}
const getUser = (token)=>{
  return jwt.decode(token, secret);
}
module.exports = {
  setToken,
  getUser
}