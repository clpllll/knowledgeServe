const Koa = require('koa');
const Router = require('koa-router')
const bodyParser  = require('koa-bodyparser')
const app = new Koa();
const router = new Router()
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
let dbo;
const fn = require('./main')
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
  dbo = db.db("knowledge");
});
router.get('/article', async (ctx, next) => {
  await fn.getArticle(ctx, dbo)
})
  .post('/login', async (ctx, next) => {
    await fn.login(ctx,dbo)
  })
  .post('/article', async (ctx, next) => {
    await fn.setArticle(ctx,dbo)
  })
  .post('/register', async (ctx) => {
    await fn.register(ctx,dbo)
  })
  .get('/title', async (ctx, next) => {
    await fn.getTile(ctx,dbo)
  })
  .get('/mark', async (ctx, next) => {
    await fn.getMark(ctx,dbo)
  })
  .get('/', (ctx, next) => {
    console.log(ctx.url)
      ctx.body = ctx.header
    ctx.message = "header"
  })
app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods())
app.listen(3006)
console.log('port 3006');

