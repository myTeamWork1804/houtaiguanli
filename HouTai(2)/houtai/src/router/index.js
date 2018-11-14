import Vue from 'vue'
import Router from 'vue-router'
import weChats from '../pages/weChats'
import CmsCustom from '../pages/CmsCustom'
import CmsContent from "../pages/CmsContent"
import MemMa from "../pages/MemMa"
import Pulic from '../pages/Pulic'
import Consoleindex from "../pages/Consoleindex"
import eSortManage from '../pages/eSortManage.vue'
import eCommentManage from  '../pages/eCommentManage'
import eLogManage from '../pages/eLogManage'
import "../assets/css/zTreeStyle/zTreeStyle.css"
import "../assets/css/demo.css"
import orderManage from '@/pages/orderManage'
import quickmark from '@/pages/quickMark'
import productsManage from '@/pages/productsManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Pulic,
       redirect:"/Consoleindex",
      children:[
        {
          path:"/CmsContent",
          component:CmsContent,

        },
        {
          path:"/MemMa",
          component:MemMa,

        },
        {
          path:"/CmsCustom",
          component:CmsCustom,

        },
        {
          path:"/weChats",
          component:weChats,
        },
        {
          path:"/Consoleindex",
          component:Consoleindex,
        },
        {
          path: '/om',
          component: orderManage
        },
        {
          path: '/qm',
          component: quickmark
        },
        {
          path: '/pm',
          component: productsManage
        },
        {
          path: '/esm',
          component: eSortManage
        },
        {
          path: '/ecm',
          component: eCommentManage
        },
        {
          path: '/elm',
          component: eLogManage
        }
      ]

    }
  ]
})
