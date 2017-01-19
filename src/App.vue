<template>
  <div id="app" @delete="deleteTab()">
    <a href="/carousel" @click.prevent="appendToTabs($event)">carousel</a>
    <a href="/tree" @click.prevent="appendToTabs($event)">tree</a>
    <router-link to="/menubar">MenuBar</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/datepicker">Datepicker</router-link>
    <router-link to="/timepicker">Timepicker</router-link>
    <router-link to="/tabbar">Tabbar</router-link>
    <router-link to="/editor">Editor</router-link>
    <router-link to="/uploader">Uploader</router-link>
    <router-link to="/pallete">Pallete</router-link>
    <router-link to="/panel">Panel</router-link>
    <router-link to="/imgEditor">ImgEditor</router-link>
    <router-view class="view side"></router-view>
    <router-view @delete="deleteTab($event)" class="view tabbar" name="tabbar" :tabs="tabs"></router-view>
    <router-view class="view main" name="main"></router-view>
  </div>
</template>

<script>
import router from './router'
import Tabbar from './components/tabbar/Tabbar'
export default {
  name: 'app',
  data () {
    return {
      tabs: []
    }
  },
  methods: {
    appendToTabs (event) {
      let path = event.currentTarget.href.match(/\/\w*$/)[0]
      this.tabs.push(path)
      router.push({path: path})
    },
    deleteTab (id) {
      this.tabs.splice(id, 1)
      router.replace(this.tabs[id - 1])
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  user-select: none;
}

.view.tabbar {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
</style>
