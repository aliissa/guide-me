import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TechStack from './views/TechStack.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tech-stack',
      name: 'tech-stack',
      component: TechStack
    }
  ]
})
