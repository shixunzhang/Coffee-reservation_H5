import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import home_page from '@/views/home_page/home_page'
import menu from '@/views/menu/menu'
import shopping_cart from '@/views/shopping_cart/shopping_cart'
import order from '@/views/order/order'
import user from '@/views/user/user'
import about_us from '@/views/user/about_us'
import user_detail from '@/views/user/user_detail'
import feedback from '@/views/user/feedback'
import avatar_select from '@/views/user/avatar_select'
import login from '@/views/login/login'
import register from '@/views/login/register'
import find_password from '@/views/login/find_password'
import change_user from '@/views/user/change_user'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '../',             //添加根目录
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home-page',
      name:'home_page',
      component:home_page
    },
    {
      path:'/menu',
      name:'menu',
      component:menu
    },
    {
      path:'/shopping',
      name:'shopping_cart',
      component:shopping_cart
    },
    {
      path:'/order',
      name:'order',
      component:order
    },
    {
      path:'/user',
      name:'user',
      component:user
    },
    {
      path:'/about',
      name:'about_us',
      component:about_us
    },
    {
      path:'/user-detail',
      name:'user_detail',
      component:user_detail
    },
    {
      path:'/feedback',
      name:'feedback',
      component:feedback
    },
    {
      path:'/avatar-select',
      name:'avatar_select',
      component:avatar_select
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/change-user',
      name:'change_user',
      component:change_user
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/find-password',
      name:'find_password',
      component:find_password
    },
  ]
})
