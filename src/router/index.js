import Vue from "vue";
import VueRouter from 'vue-router'
import store from '../store/index'
Vue.use(VueRouter)
const routes=[
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/index',
    component:()=>import ('views/index.vue'),
    children:[
      {
        path: '/home',
        component: ()=>import ('views/Home/Home.vue'),
        meta: {
          isUseCache:false,
          keepAlive:true,
        }
      },
      {
        path:'/category',
        component:()=>import ('views/Category/Category.vue')
      },
      {
        path:'/cart',
        component:()=>import ('views/Cart/Cart.vue')
      },
      {
        path:'/profile',
        component:()=>import ('views/Profile/Profile.vue')
      },
      {
        path:'/detail/:iid',
        component:()=>import ('views/Detail/Detail.vue')
      }
    ]
    
  },
  {
    path:'/login',
    component: ()=>import('views/Member/Login.vue')
  },
  {
    path: '/register',
    component: () => import('views/Member/Register.vue')
  }
  
  

]
const router = new VueRouter({
  routes,
  mode : 'history',
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log(savedPosition)
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       console.log(document.body.scrollTop)
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }

})



export default router