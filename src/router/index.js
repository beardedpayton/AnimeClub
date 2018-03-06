import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AnimeDetail from '@/components/AnimeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/anime/:id',
      name: 'anime-detail',
      component: AnimeDetail
    }
  ]
})
