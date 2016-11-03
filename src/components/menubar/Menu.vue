<template lang="pug">
  li.menu(:class="'menu-level-' + level")
    a(v-text="name", :href="url")
</template>

<script>
export default {
  name: 'menu-unit',
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    level: {
      type: Number,
      required: true
    },
    menuChildren: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.menu {
  position: relative;
  display: inline-block;
  list-style: none;
  text-decoration: none;

  width: 150px;
  height: 29.5px;
  line-height: 29.5px;
  border-bottom: 1px solid #fff;
  background-color: #fe7b64;

  &:hover {
    background-color: #f44a2c;
  }

  &.menu-level-0 {
    width: 200px;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #fff;
    background-color: #346a95;

    &:hover {
      background-color: #1a3959;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;

    color: #fff;
    font: 15px 'Microsoft Yahei UI';
    text-decoration: none;
  }
}
</style>
