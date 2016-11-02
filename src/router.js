import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel from './components/carousel/Carousel'
import Tree from './components/tree/Tree'

Vue.use(VueRouter)

const routes = [
  { path: '/carousel', component: Carousel },
  { path: '/tree', component: Tree }
]

const router = new VueRouter({
  routes
})

export default router
