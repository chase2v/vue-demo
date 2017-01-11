<template lang="html">
  <div class="dropdown">
    <input class="dropdown-window" type="text" v-model="currentItem" :disabled="config.type === 'icon'"/>
    <span class="button">
      <i @click.stop="onClickButton()" :class="isShowPanel ? 'fa-angle-up' : 'fa-angle-down'" class="fa"></i>
    </span>
    <transition name="slide">
      <ul class="panel" v-show="isShowPanel">
        <li v-for="item in config.list" @click.stop="onClickItem(item)">{{ item.label }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isShowPanel: false,
      currentItem: this.config.list[this.config.defaultValue].label
    }
  },

  methods: {
    onClickButton () {
      this.isShowPanel = !this.isShowPanel
    },
    onClickItem (item) {
      this.currentItem = item.label
      this.isShowPanel = false
      this.$emit('selected', item.name)
    }
  }
}
</script>
