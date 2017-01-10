<template lang="html">
  <div class="dropdown">
    <input type="text" v-model="currentItem" />
    <span class="button">
      <i @click.stop="onClickButton()" :class="isShowPanel ? 'fa-angle-up' : 'fa-angle-down'" class="fa"></i>
    </span>
    <transition name="slide">
      <ul class="panel" v-show="isShowPanel">
        <li v-for="item in list" @click.stop="onClickItem(item)">{{ item }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    defaultValue: {
      default: ''
    }
  },

  data () {
    return {
      isShowPanel: false,
      currentItem: this.defaultValue
    }
  },

  methods: {
    onClickButton () {
      this.isShowPanel = !this.isShowPanel
    },
    onClickItem (item) {
      this.currentItem = item
      this.isShowPanel = false
      this.$emit('selected', item)
    }
  }
}
</script>
