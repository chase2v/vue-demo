import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel from './components/carousel/Carousel'
import Tree from './components/tree/Tree'
import MenuBar from './components/menubar/MenuBar'

Vue.use(VueRouter)

const routes = [
  { path: '/carousel', component: Carousel },
  { path: '/tree', component: Tree },
  { path: '/menubar', component: MenuBar }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
