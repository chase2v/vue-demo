<template lang="pug">
  .menu-panel
    .menu-block(v-for="menu in menus")
      menu-unit(:key="menu.id", :url="menu.url", :name="menu.name", :level="menu.level", :menuChildren="menu.menuChildren")
      menu-panel(v-if="menu.menuChildren.length", :menus="menu.menuChildren")
</template>

<script>
import Menu from './Menu'

export default {
  name: 'menu-panel',
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  components: {
    'menu-unit': Menu
  }
}
</script>

<style lang="scss">
.menu-panel {
  display: none;
  position: absolute;
  left: 100%;
  margin-left: 1px;
}
</style>
