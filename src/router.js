import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel from './components/carousel/Carousel'
import Tree from './components/tree/Tree'
import MenuBar from './components/menubar/MenuBar'
import Table from './components/table/Table'
import Datepicker from './components/datepicker/Datepicker'
import Timepicker from './components/timepicker/Timepicker'

Vue.use(VueRouter)

const routes = [
  { path: '/carousel', component: Carousel },
  { path: '/tree', component: Tree },
  { path: '/menubar', component: MenuBar },
  { path: '/table', component: Table },
  { path: '/datepicker', component: Datepicker },
  { path: '/timerpicker', component: Timepicker }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
