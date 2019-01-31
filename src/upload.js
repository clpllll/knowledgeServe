const fs = require('fs')
const path = require('path')
module.exports = async (ctx) => {
  const file = ctx.request.files.file
  const reader = fs.createReadStream(file.path);
  const fileName = file.name.replace(/\s/g,'')
  let filePath = './public' + `/${fileName}`;
  // let filePath = path.join(__dirname, 'public') + `/${file.name}`;
  // 创建可写流
  const upStream = fs.createWriteStream(filePath);
  // 可读流通过管道写入可写流
  reader.pipe(upStream);
  // return ctx.body = {
  //   message: "上传成功！",
    
  // };
  ctx.body = ctx.setStatus(900,{path:filePath.replace('./','/')})
}