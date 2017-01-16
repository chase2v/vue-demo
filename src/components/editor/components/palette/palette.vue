<template lang="html">
  <div class="c-palette">
    <canvas
      ref="cvsOpacity"
      style="width: 20px; height: 200px; cursor: crosshair;"
      @click.stop="pickColor">
    </canvas>
    {{test}}
    <canvas
      ref="cvs"
      style="width: 20px; height: 200px; cursor: crosshair;"
      @click.stop="pickColor">
    </canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'This is palette.'
    }
  },
  methods: {
    pickColor (e) {
      let x = e.offsetX
      let y = e.offsetY
      let imageData = this.ctx.getImageData(x * 50 / 20, y * 256 * 6 / 200, 1, 1)
      this.createImageDataOpacity({
        r: imageData.data[0],
        g: imageData.data[1],
        b: imageData.data[2],
        a: imageData.data[3]
      })
    },
    createImageDataOpacity (color) {
      console.log(color)
      let cvs = this.$refs.cvsOpacity
      cvs.width = 20
      cvs.height = 100

      let ctx = cvs.getContext('2d')
      let imageData = ctx.createImageData(20, 100)
      let arr = this.createImageDataArrayOpacity(color, 20)
      for (let i = 0; i < 20 * 4 * 100; i++) {
        imageData.data[i] = arr[i]
      }
      ctx.putImageData(imageData, 0, 0)
    },
    /**
     * 创建透明度颜色选取条的 ImageData 数组
     *
     * color 对象：
     *  {
     *    r, g, b, a
     *  }
     */
    createImageDataArrayOpacity (color, width) {
      let arr = []
      for (let i = 100; i > 0; i--) {
        for (let j = 0; j < width; j++) {
          arr.push(color.r)
          arr.push(color.g)
          arr.push(color.b)
          if (i === 0) {
            arr.push(i)
          } else {
            arr.push(parseInt(i, 16) - 1)
          }
        }
      }
      return arr
    }
  },
  mounted () {
    this.$refs.cvs.width = 50
    this.$refs.cvs.height = 256 * 6
    let ctx = this.$refs.cvs.getContext('2d')
    this.ctx = ctx

    let imageData = ctx.createImageData(50, 256 * 6)
    createDataPrimary(50)
    console.log(imageData)
    ctx.putImageData(imageData, 0, 0)

    // 生成 imageData 的数据集
    // w: 图片的宽度
    function createDataPrimary (w) {
      let color = {
        r: 255,
        g: 0,
        b: 0,
        a: 255
      }
      let j = 0

      _loop(1, 'g')
      _loop(0, 'r')
      _loop(1, 'b')
      _loop(0, 'g')
      _loop(1, 'r')
      _loop(0, 'b')

      function _loop (type, c) {
        if (type) {
          __increase()
        } else {
          __decrease()
        }

        function __increase () {
          for (; color[c] <= 255; color[c]++) {
            __same()
          }
          color[c] = 255
        }

        function __decrease () {
          for (; color[c] >= 0; color[c]--) {
            __same()
          }
          color[c] = 0
        }

        function __push (v) {
          imageData.data[j] = v
          j++
        }

        function __same () {
          for (let i = w; i > 0; i--) {
            __push(color.r)
            __push(color.g)
            __push(color.b)
            __push(color.a)
          }
        }
      }
    }
  }
}
</script>
