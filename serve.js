const Koa = require('koa');
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const Router = new KoaRouter()
const routers = require('./services/routers')
const router = routers(Router)
app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods())
app.listen(3006)
console.log('port 3006');

