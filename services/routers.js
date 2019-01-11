
const ObjectId = require('mongodb').ObjectID
const { getArticle, login, setArticle, register, getTile, getMark, getInfo, getCategory, patchArticle } = require('../main');
module.exports = (router) => {
  router.all('/*', (ctx, next) => {
    // ctx.setStatus = setStatus;]
    // console.log(ctx.setStatus)
    // console.log(ctx.url)
    // ctx.body = ctx.header
    // ctx.message = "header"
    
    //过滤
    return next()
  })
  .get('/article', async (ctx, next) => {
    await getArticle(ctx)
  })
  .post('/login', async (ctx, next) => {
    await login(ctx)
  })
  .post('/article', async (ctx, next) => {
    await setArticle(ctx)
  })
  .post('/register', async (ctx) => {
    await register(ctx)
  })
  .get('/title', async (ctx, next) => {
    await getTile(ctx)
  })
  .get('/mark', async (ctx, next) => {
    await getMark(ctx)
  })
  .get('/info', async (ctx, next) => {
    await getInfo(ctx)
  })
  .get('/category', async (ctx, next) => {
    await getCategory(ctx)
  })
  .patch('/article', async (ctx, next) => {
    await patchArticle(ctx,ObjectId)
  })
  return router
}