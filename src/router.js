import Vue from "vue"
import VueRouter from "vue-router"
//路由懒加载
import NProgress from "nprogress"
import "nprogress/nprogress.css"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("@view/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("@view/main"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "UserList",
        component: () => import("@view/User/UserList"),
        meta: {
          title: "员工列表",
          module: "用户管理",
        },
      },
      {
        path: "WorkList",
        component: () => import("@view/Work/WorkList"),
        meta: {
          title: "工单列表",
          module: "业务管理",
        },
      },
    ],
  },

  {
    path: "/login",
    meta: {
      title: "登录",
    },
    component: () => import("@view/User/Login.vue"),
  },
  {
    path: "*",
    meta: {
      title: "404",
    },
    component: () => import("@view/Error404.vue"),
  },
]

const router = new VueRouter({
  routes,
  mode: "history",
})
router.beforeEach((to, from, next) => {
  // let loadingBar = document.getElementById("global-loading")
  // if (!loadingBar) {
  //   loadingBar = document.createElement("div")
  //   loadingBar.id = "global-loading"
  //   document.body.append(loadingBar)
  // } else {
  //   loadingBar.style.display = "block"
  // }
  NProgress.start()
  document.title = "哈哈- " + to.meta.title
  setTimeout(() => {
    next()
  }, 1000)
})
router.afterEach(() => {
  // let loadingBar = document.getElementById("global-loading")
  // if (loadingBar) loadingBar.style.display = "none"
  NProgress.done()
})
export default router
