const obj = {
  100: {      //login
    code: 200,
    message:"登陆成功"
  },
  101: {
    code: 101,
    message:"用户名或密码错误"  
  },
  102: {
    code: 102,
    message:'用户名密码不能为空'
  },
  200: {      //getInfo
    code: 200,
    message:"获取信息成功"
  },
  201: {
    code: 201,
    message:'token过期'
  },
  300: {      //getTitle
    code: 200,
    message:"获取title成功"
  },
  301: {
    code: 301,
    message:"获取title失败"
  },
  400: {      //getCategory
    code: 200,
    message:"获取分类成功"
  },
  401: {
    code: 401,
    message:"获取分类失败"
  },
  500: {      //getArticle
    code: 200,
    message:"获取文章成功"
  },
  501: {
    code: 501,
    message:"获取文章失败"
  },
  600: {      //setArticle
    code: 200,
    message:"新增文章成功"
  },
  601: {
    code: 601,
    message:"新增文章失败"
  },
  602: {
    code: 601,
    message:"文章已经存在"
  },
  700: {      //register
    code: 200,
    message:"注册成功"
  },
  701: {
    code: 701,
    message:"注册失败"
  },
  702: {
    code: 702,
    message:"用户名、密码不能为空"
  },
  800: {      //patchArticle
    code: 200,
    message:"修改文章成功"
  },
  801: {
    code: 801,
    message:"修改文章失败"
  },
  900: {
    code: 200,
    message:"上传成功"
  },
  901: {
    code: 901,
    message:"上传失败"
  },
  1000: {
    code: 200,
    message:"获取总分类成功"
  },
  1100: {
    code: 200,
    message:"查询成功"
  }

}
module.exports = (code,data=null) => {
  return {
    ...obj[code],
    data,
  }
}