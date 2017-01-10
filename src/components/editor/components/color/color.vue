<template lang="html">
  <div class="color">
    <c-button :config="config">
      a
    </c-button>
    <div class="panel" v-show="isShowPanel">
      <c-row v-for="arr in colors">
        <span class="color-block" v-for="color in arr" :style="{'background-color': color}"></span>
      </c-row>
    </div>
  </div>
</template>

<script>
import Button from '../common/button'
import Row from '../common/row'

export default {
  props: {
    colors: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isShowPanel: false,
      config: {
        handler (e) {
          this.isShowPanel = !this.isShowPanel
        }
      }
    }
  },
  components: {
    'c-button': Button,
    'c-row': Row
  }
}
</script>
