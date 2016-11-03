<template lang="pug">
  .menu-bar
    .menu-block(v-for="menu in menus")
      menu-unit(:key="menu.id", :url="menu.url", :name="menu.name", :level="menu.level", :menuChildren="menu.menuChildren")
      menu-panel(v-if="menu.menuChildren.length", :menus="menu.menuChildren")
</template>

<script>
/**
 * menu-bar
 *
 * 方向:
 * vertical
 * horizental
 *
 * 数据：
 * 嵌套数组
 *
 * 菜单对象：
 * {
 *   id
 *   url
 *   name
 *   level
 *   iconClass
 *   menuParent
 *   menuChildren
 * }
 *
 */

import http from '../../util/http'
import Menu from './Menu'
import MenuPanel from './MenuPanel'
import menusDataHandler from './menusDataHandler'

export default {
  name: 'menubar',
  props: {
    direction: {
      type: String,
      default: 'vertical'
    }
  },
  data () {
    return {
      menus: []
    }
  },
  components: {
    'menu-unit': Menu,
    'menu-panel': MenuPanel
  },
  methods: {
  },
  beforeCreate () {
    // 获取数据
    http.$get('/static/data/menubar_mock.json').then(res => {
      let menusData = JSON.parse(res).data
      // 处理数据
      menusDataHandler(menusData).forEach(v => {
        if (v.level === 0) {
          this.menus.push(v)
        }
      })
    })
  }
}
</script>

<style lang="scss">
.menu-bar {
  position: absolute;
  left: 0;

  .menu-block:hover>.menu-panel {
    display: inline-block;
  }
}
</style>
