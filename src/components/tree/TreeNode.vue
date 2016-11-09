<template lang="pug">
  transition(name="slide-fade")
    .node(:style="{textIndent: level * 10 + 'px'}", v-show="visible", :id="id")
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
