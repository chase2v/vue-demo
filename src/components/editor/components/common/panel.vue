<template lang="html">
  <c-popover>
    <div class="c-panel" v-show="isShow">test</div>
  </c-popover>
</template>

<script>
export default {
  computed: {
    isShow () {
      return this.config.show
    }
  },
  props: {
    config: {
      type: Object,
      required: true
    }
  }
}
</script>
