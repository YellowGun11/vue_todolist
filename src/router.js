import Vue from "vue";
import Router from "vue-router";
import { Message } from "element-ui";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    name: "登录界面",
    component: () => import("./views/Login/index"),
    hidden: true
  },
  {
    path: "/register",
    name: "注册界面",
    component: () => import("./views/Register/index"),
    hidden: true
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./views/Login/index"),
    hidden: true
  },
  {
    path: "/index",
    name: "主页",
    component: () => import("./views/Home/index"),
    redirect: "/index/items",
    children: [
      {
        path: "/index/items",
        name: "待办项",
        component: () => import("./views/Items/index")
      },
      {
        path: "/index/finished",
        name: "已完成",
        component: () => import("./views/Finished/index")
      },
      {
        path: "/index/recycle",
        name: "回收站",
        component: () => import("./views/RecycleBin/index")
      }
    ]
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

export default router;

//路由全局守卫
/* router.beforeEach((to, from, next) => {
  if (cookie.get()) { // 有token
    if (to.path === '/') {
      next({
        path: '/index'
      })
    } else {
      if (store.state.loginPage.account == '') {
        store.dispatch('getUserInfo').then(data => { //获取用户信息
          next()
        }).catch(() => {
          // next({
          //   path: '/'
          // })
        })
      } else {
        next()
      }
    }
  } else { // 无token
    if (to.path === '/') {
      next()
    } else {
      Message({
        type: 'warning',
        showClose: true,
        message: '请先登录哦'
      })
      next({
        path: '/'
      })
    }

  }
}) */
