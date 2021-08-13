module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'common': '@/common',
        'network': '@/network',
      }
    },
    devServer: {

      before(app) {

        //用户信息池
        let userpool = [
          { username: '1881418', password: 'asdasd' },
          { username: '8761637', password: 'asdasd' }
        ]
        //注册接口
        app.get('/api/register', (req, res) => {
          const { username } = req.query
          const userLength = userpool.filter(v => v.username == username).length
          if (userLength > 0) {
            res.json({
              success: false,
              message: '用户名已存在',
            })
          } else {
            res.json({
              success: true,
              message: '注册成功'
            })
          }
        })
        //登陆接口
        app.get('/api/login', (req, res) => {
          let tokenkey = 'asd'
          const { username, password } = req.query
          const userLength = userpool.filter(v => v.username == username & v.password == password).length
          if (userLength > 0) {
            res.json({
              code: '0',
              message: '登录成功',
              token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
            })
          } else {
            res.json({
              code: '1',
              message: '账号或密码错误'
            })
          }
        })
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ],
  
}

// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         'assets': '@/assets',
//         'common': '@/common',
//         'components': '@/components',
//         'network': '@/network',
//         'views': '@/views',
//       }
//     }
//   }
// }
