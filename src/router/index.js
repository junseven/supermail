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
        path:'/home',
        component:()=>import ('views/Home/Home.vue')
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
})



export default router