import Vue from "vue"
import Router from "vue-router"
import table from "@/views/table.vue"
import add from "@/views/add.vue"
import updata from "@/views/updata.vue"
Vue.use(Router)

const router = new Router({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      name: "table",
      component: table,
    },
    {
      path: "/table",
      name: "table",
      component: table,
    },
    {
      path: "/add",
      name: "add",
      component: add,
    },
    {
      path: "/updata",
      name: "updata",
      component: updata,
    },
  ],
})

export default router
