import Editor from './components/editor'
import config from './config'
import './styles/index.scss'
import FontFamily from './components/font-family/font-family'
import FontSize from './components/font-size/font-size'
import Color from './components/color/color'

export default {
  render (h) {
    const modules = config.components
    // const modulesNames = Object.keys(modules)

    return (
      <Editor>
        <Font-family
          fonts={modules['font-family'].fonts}
          v-show={modules['font-family'].show}
        />
        <Font-size
          sizes={modules['font-size'].sizes}
          v-show={modules['font-size'].show}
        />
        <Color
          colors={ modules.color.colors }
          v-show={ modules.color.show }
        />
      </Editor>
    )
  },

  components: {
    'Font-family': FontFamily,
    'Font-size': FontSize
  }
}
