<template lang="html">
  <div class="c-panel" v-if="signRoot" v-show="signLeaf">
    <slot>This is default slot.</slot>
  </div>
</template>

<script>
import PanelManager from './panelManager'

export default {
  props: {
    sign: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      init: false
    }
  },

  computed: {
    signRoot () {
      if (!this.init) {
        return false
      } else {
        return this.sign
      }
    },
    signLeaf () {
      if (!this.signRoot) {
        return false
      } else {
        return this.sign
      }
    }
  },

  watch: {
    'sign' (newV) {
      if (newV) {
        if (!this.init) {
          this.init = true
        }
        // else {}
        PanelManager.open(this.id)
      } else {
        PanelManager.close(this.id)
      }
    }
  },

  created () {
    this.id = PanelManager.getId()
  }
}
</script>

<style lang="scss" scoped>
.c-panel {
  opacity: 1;
  background-color: transparent;
  border: none;
}
</style>
