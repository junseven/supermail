import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index"
import axios from 'axios'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

// require('./mock');
Vue.prototype.$axios = axios
Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

//安装插件
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body)
new Vue({
  render: function (h) { return h(App) },
  router,
  store
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('token')
//   store.commit('setToken', localStorage.getItem('token'))
//   if(to.path!='/login'){
//     if (token === null || token === '') {
//       console.log('没有token');
//       next('/login')
//     } else {
//       console.log('有token');
//       next()
//     }
//   }else{
//     console.log('登陆页');
//     next()
//   }
//   // console.log(to.path); 
//   // console.log(from.path);
//   // next()
// })
