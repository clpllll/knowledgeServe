const Koa = require('koa');
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const Router = new KoaRouter()

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
let dbo;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db("knowledge");
  app.context.dbo = dbo;
});
const routers = require('./services/routers')
const router = routers(Router)
const setStatus = require('./util/codeStatus')

app.context.setStatus = setStatus;
app.use(bodyParser())
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(3006)
console.log('port 3006');

