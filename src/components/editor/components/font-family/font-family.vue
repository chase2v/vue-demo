<template lang="html">
<div class="font-family">
  <Dropdown :list="fonts" :defaultValue="fonts[0]" />
</div>
</template>

<script>
import Dropdown from '../common/dropdown.vue'

export default {
  props: {
    fonts: {
      type: Array,
      required: true
    }
  },
  components: {
    Dropdown
  }
}
</script>
