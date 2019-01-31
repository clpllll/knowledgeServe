// const Koa = require('koa');
const fs = require('fs');
// const app = new Koa();

module.exports = async (ctx) => {
  const ff = fs.readFileSync('./JS-ch.md', 'utf-8').toString()
  await ctx.dbo.collection("js").insertOne({name:"text",content:ff})
}