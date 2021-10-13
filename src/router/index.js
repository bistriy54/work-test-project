import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/pages/MainPage.vue'
import CharacterPage from '../components/pages/CharacterPage.vue'
import EpisodePage from '../components/pages/EpisodePage.vue'
import Page404 from '../components/pages/Page404.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/character/:id?',
    name: 'character',
    component: CharacterPage,
  },
  {
    path: '/episode/:id?',
    name: 'episode',
    component: EpisodePage,
  },
  {
    path: '*',
    component: Page404,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
