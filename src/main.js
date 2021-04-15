import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
require('./mock');

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router
}).$mount('#app')

// const Mock = require('mockjs')
// let mockUserInfo = {
//     "code": 0,
//     "data": {
//       "fullName": "@CNAME", // 随机生成中文人名
//       "userId": 1000234234001,
//     }
// };
// Mock.mock(RegExp('/home/data' + ".*"), "get", (options) =>{
//     // 最佳实践，将请求和参数都打印出来，以便调试
//     console.log(options);
//     return Mock.mock(mockUserInfo);
// });