<template lang="html">
  <div class="color">
    <c-button :config="config">
      a
    </c-button>
    <div class="panel" v-show="isShowPanel">
      <c-row v-for="arr in colors">
        <span class="color-block" v-for="color in arr" :style="{'background-color': color}" @click.stop="emitExec(color)"></span>
      </c-row>
      <c-button :config="configButtonPalette">调色板</c-button>
    </div>
    <c-panel :config="configPanelPalette">
      <c-palette />
    </c-panel>
  </div>
</template>

<script>
import Button from '../common/button'
import Row from '../common/row'
import Palette from '../palette/palette'

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
      },
      configButtonPalette: {
        handler (e) {
          this.configPanelPalette.show = !this.configPanelPalette.show
        }
      },
      configPanelPalette: {
        show: false
      }
    }
  },

  methods: {
    emitExec (color) {
      this.$emit('exec', {
        name: 'foreColor',
        arg: color
      })
    }
  },

  components: {
    'c-button': Button,
    'c-row': Row,
    'c-palette': Palette
  }
}
</script>
