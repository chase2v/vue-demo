<template lang="html">
<div class="font-size">
  <Dropdown :list="sizes" :defaultValue="sizes[0]" />
</div>
</template>

<script>
import Dropdown from '../common/dropdown.vue'

export default {
  props: {
    sizes: {
      type: Array,
      required: true
    }
  },
  components: {
    Dropdown
  }
}
</script>
