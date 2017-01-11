<template lang="html">
  <div class="c-table">
    <c-button :config="config" @click.stop="onClickButton()">
      <b>T</b>
    </c-button>
    <c-panel :config="panelConfig" />
  </div>
</template>

<script>
import Button from '../common/button'
import Panel from '../common/panel'

export default {
  data () {
    return {
      config: {

      },
      panelConfig: {
        show: false
      }
    }
  },

  methods: {
    onClickButton () {
      this.panelConfig.show = !this.panelConfig.show
    }
  },

  components: {
    'c-button': Button,
    'c-panel': Panel
  }
}
</script>
