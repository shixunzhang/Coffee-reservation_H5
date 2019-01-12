import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


import home_page from '@/views/home_page/home_page'
import menu from '@/views/menu/menu'
import shopping_cart from '@/views/shopping_cart/shopping_cart'
import order from '@/views/order/order'

// 导入help路由
import help_problem from '@/views/user_center/help/problem'
import about_us from '@/views/user_center/help/about_us'
import problem_answer from '@/views/user_center/help/problem_answer'


//导入我的日程  数据中心  热词
import info_date from '@/views/user_center/info/date'
import data_center from '@/views/user_center/data_center/data_center'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '../',             //添加根目录
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 个人中心-常见问题
    {
      path: '/user-center/help/problem',
      name: 'help_problem',
      component: help_problem
    },
    {
      path: '/user-center/help/problem-answer',
      name: 'problem_answer',
      component: problem_answer
    },
    // 关于我们
    {
      path: '/user-center/help/about-us',
      name: 'about_us',
      component: about_us
    },
    // 我的日程
    {
      path: '/user-center/info/date',
      name:'info_date',
      component:info_date
    },
    {
      path:'/user-center/data',
      name:'data_center',
      component:data_center
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





  ]
})
