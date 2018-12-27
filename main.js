const setArticle = require('./src/setArticle')
const getArticle = require("./src/getArticle")
const getTile = require('./src/getTile')
const getMark = require('./src/getMark')
const login = require('./src/login')
const register = require('./src/register')
module.exports = fn = {
  setArticle,
  getArticle,
  getTile,
  getMark,
  login,
  register
}