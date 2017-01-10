<template lang="html">
  <div class="c-button" @click.stop="config.handler.call($parent, $event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      require: true
    }
  }
}
</script>
