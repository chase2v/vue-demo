import Vue from 'vue'
import VueRouter from 'vue-router'
import Carousel from './components/carousel/Carousel'
import Tree from './components/tree/Tree'
import MenuBar from './components/menubar/MenuBar'
import Table from './components/table/Table'
import Datepicker from './components/datepicker/Datepicker'
import Timepicker from './components/timepicker/Timepicker'
import Tabbar from './components/tabbar/Tabbar'
import Editor from './components/editor/'
import Uploader from './components/uploader/uploader'
import Pallete from './components/pallete/pallete'
import Panel from './components/panel/panel'

Vue.use(VueRouter)

const routes = [
  { path: '/carousel', components: { tabbar: Tabbar, main: Carousel } },
  { path: '/tree', components: { tabbar: Tabbar, main: Tree } },
  { path: '/menubar', component: MenuBar },
  { path: '/table', component: Table },
  { path: '/datepicker', component: Datepicker },
  { path: '/editor', component: Editor },
  { path: '/uploader', component: Uploader },
  { path: '/timerpicker', component: Timepicker },
  { path: '/pallete', component: Pallete },
  { path: '/panel', component: Panel },
  {
    path: '/tabbar',
    components: {
      tabbar: Tabbar,
      main: Table
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
