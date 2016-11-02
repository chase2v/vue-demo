<template lang="pug">
  .node(:style="{textIndent: level * 10 + 'px'}")
    i.fa(:class="iconClass")
    span(v-text="value")
</template>

<script>
export default {
  name: 'treeNode',
  props: ['id', 'type', 'level', 'value', 'valueType', 'iconClass', 'parentNode', 'childNodes']
}
</script>

<style lang="scss">
.node {
  text-align: left;
  line-height: 25px;

  i {
    cursor: pointer;
  }

  span {
    padding-left: 5px;
  }
}
</style>
