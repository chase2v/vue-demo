<template lang="html">
  <div class="dropdown">
    <input class="dropdown-window" type="text" v-model="currentItem" :disabled="config.type === 'icon'"/>
    <span class="button">
      <i @click.stop="onClickButton()" :class="panelConfig.sign ? 'fa-angle-up' : 'fa-angle-down'" class="fa"></i>
    </span>
    <transition name="slide">
      <c-panel :config="panelConfig">
        <ul>
          <li v-for="item in config.list" @click.stop="onClickItem(item)">{{ item.label }}</li>
        </ul>
      </c-panel>
    </transition>
  </div>
</template>

<script>
import CPanel from './panel/panel'

export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      currentItem: this.config.list[this.config.defaultValue].label,
      panelConfig: {
        sign: false
      }
    }
  },

  methods: {
    onClickButton () {
      this.panelConfig.sign = !this.panelConfig.sign
    },
    onClickItem (item) {
      this.currentItem = item.label
      this.panelConfig.sign = false
      this.$emit('selected', item.name)
    }
  },

  components: {
    'c-panel': CPanel
  }
}
</script>
