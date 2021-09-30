import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import store from "./store/index"
import vuetify from './plugins/vuetify'
import axios from 'axios'
// require('./mock');
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
  router,
  vuetify,
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
