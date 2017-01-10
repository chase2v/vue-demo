<template lang="html">
  <div class="tab">
    <router-link :to="to">{{to}}</router-link>
    <i class="fa fa-times" @click="deleteSelf()"></i>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  props: {
    to: {
      required: true,
      default: '/',
      type: String
    },
    id: {
      required: true,
      type: Number
    }
  },
  methods: {
    deleteSelf () {
      this.$emit('delete', this.id)
    }
  }
}
</script>

<style lang="scss">
.tabbar .tab {
  display: inline-block;
  width: 100px;
  height: 100%;
  box-sizing: border-box;

  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  text-align: center;
}
</style>
