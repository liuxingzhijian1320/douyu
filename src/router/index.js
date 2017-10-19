import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve =>
  import ('../views/home/home');

const classify = resolve =>
  import ('../views/classify/classify');

const RoomList = resolve =>
  import ('../views/RoomList');

const Recommand = resolve =>
  import ('../views/Recommand');

const user = resolve =>
  import ('../views/user/user');


Vue.use(Router)

const router = new Router({

  mode: 'hash', // ['history', 'hash']
  linkActiveClass: 'active', // active class 名称
  scrollBehavior(to, from, savedPosition) { // 后退页面时, 保留滚动位置
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },

  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/classify',
      component:classify,
    },
    {
      path:'/roomList/:gameId/:gameName',
      component:RoomList
    },
    {
      path:'/recommand',
      component:Recommand
    },
    {
      path:'/user',
      component:user
    },
    {
      path:"*",
      redirect:'/'
    }
  ]
})



export default router;
