<template lang="pug">
  .node(:style="{textIndent: level * 10 + 'px', display: visible ? 'block' : 'none'}", :id="id")
    i.fa(:class="iconClass", @click="emitToggle")
    span(v-text="value")
</template>

<script>
export default {
  name: 'treeNode',
  props: ['id', 'type', 'level', 'value', 'valueType', 'iconClass', 'parentNode', 'childNodes', 'visible', 'childrenVisible'],
  methods: {
    emitToggle (event) {
      this.$emit('toggle', event)
    }
  }
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
