const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const { getArticle, login, setArticle, register, getTile, getMark, getInfo } = require('../main');
let dbo;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("knowledge");
});
module.exports = (router) => {
  router.all('/*', (ctx, next) => {
    // console.log(ctx.url)
    // ctx.body = ctx.header
    // ctx.message = "header"
    
    //过滤
    return next()
  })
  .get('/article', async (ctx, next) => {
    await getArticle(ctx, dbo)
  })
  .post('/login', async (ctx, next) => {
    await login(ctx,dbo)
  })
  .post('/article', async (ctx, next) => {
    await setArticle(ctx,dbo)
  })
  .post('/register', async (ctx) => {
    await register(ctx,dbo)
  })
  .get('/title', async (ctx, next) => {
    await getTile(ctx,dbo)
  })
  .get('/mark', async (ctx, next) => {
    await getMark(ctx,dbo)
   })
   .get('/info', async (ctx, next) => {
     await getInfo(ctx,dbo)
   })
  return router
}