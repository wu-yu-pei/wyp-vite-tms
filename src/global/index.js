export default (app) => {
  app.config.globalProperties.$global = {
    foo() {
      return 'foo'
    },
    mapToChinese(en) {
      switch (en) {
        case 'username':
          return '用户名'
          break
        case 'number':
          return '账号'
          break
        case 'identityCard':
          return '身份证号'
          break
        case 'phoneNumber':
          return '手机号'
          break
        case 'faculty':
          return '学院'
          break
        case 'title':
          return '学位'
          break
        case 'major':
          return '专业'
          break
        default:
          break
      }
    },
  }
}
