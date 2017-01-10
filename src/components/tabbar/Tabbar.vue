<template lang="html">
  <div class="tabbar">
    <template v-for="(tab, idx) in tabs">
      <Tab :to="tab" :id="idx" @delete="deleteTab($event)"/>
    </template>
  </div>
</template>

<script>
import Tab from './Tab'

export default {
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    deleteTab (id) {
      this.$emit('delete', id)
    }
  },
  components: {
    Tab
  }
}
</script>

<style lang="scss">
.tabbar {
  width: 100%;
  height: 100%;

  text-align: left;
  background-color: #ccc;
}

</style>
