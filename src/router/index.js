import Vue from 'vue'
import Router from 'vue-router'
import Head from '@/components/Head'
import Index from '../components/Index'
import Fen from '../components/Fen'
import Sosuo from '../components/Sosuo'
import Pai from '../components/Pai'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/head'
    },
    {
      path: '/head',
      name: 'head',
      component: Head
    },
    {
      path: '/fen',
      name: 'fen',
      component: Fen
    },
    {
      path: '/pai',
      name: 'pai',
      component: Pai
    },
    {
      path: '/sosuo',
      name: 'sosuo',
      component: Sosuo
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    }
  ]
})
