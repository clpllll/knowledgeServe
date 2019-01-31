const Koa = require('koa');
const KoaRouter = require('koa-router')
// const bodyParser = require('koa-bodyparser') //解析post params
const Koabody = require('koa-body');
const Url = require('url'); //解析url
const static = require('koa-static');//静态文件
// const formidable = require('koa-formidable');//图片处理
// const fs = require('fs');//文件处理
// const path = require('path');//路径处理
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
app.context.pUrl = Url;
app.use(static(__dirname),'public');//设置静态路径
// app.use(bodyParser())
app.use(Koabody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}))
app.use(router.routes());
app.use(router.allowedMethods())

app.listen(3006)
console.log('port 3006');

