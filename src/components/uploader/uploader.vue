<template lang="html">
  <div class="c-uploader">
    <div class="c-uploader-preview" @mousemove.stop="onMousemovePreview"  @mouseup.stop="onMouseupCutDot">
      <img :src="imgSrc" ref="img"/>
      <div class="c-uploader-resize">

      </div>
      <div class="c-uploader-cut" v-show="isCutting" ref="cut">
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
        <span class="c-uploader-cut-dot" @mousedown.stop="onMousedownCutDot"></span>
      </div>
    </div>
    <div class="c-uploader-main">
      <input type="file" @change="onChangeInput" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object
    }
  },
  data () {
    return {
      imgSrc: null,
      isCutting: false,
      isMousedown: 0,
      curDot: null
    }
  },
  methods: {
    resize () {

    },
    onMousedownCutDot (e) {
      this.isMousedown = 1
      this.curDot = e.currentTarget
    },
    onMousemovePreview (e) {
      if (e.target.tagName !== 'SPAN') {
        if (this.isMousedown && this.curDot) {
          console.log(e.offsetX)
          this.$refs.cut.style.width = e.offsetX + 'px'
          this.$refs.cut.style.height = e.offsetY + 'px'
        }
        // else {}
      }
      // else {}
    },
    onMouseupCutDot (e) {
      this.isMousedown = 0
    },
    onChangeInput (e) {
      let imgSrc = window.URL.createObjectURL(e.currentTarget.files[0])
      let img = new window.Image()
      img.onload = (e) => {
        this.isCutting = true

        let ratioImage = img.width / img.height
        let ratioImg = 4 / 3
        ratioImage = ratioImage.toFixed(3)
        ratioImg = ratioImg.toFixed(3)
        console.log(ratioImage, ratioImg)
        if (ratioImage >= ratioImg) {
          this.$refs.img.style.width = '100%'
          this.$refs.img.style.height = 400 / ratioImage + 'px'
        } else {
          this.$refs.img.style.height = '100%'
          this.$refs.img.style.width = ratioImage * 300 + 'px'
        }

        this.$refs.cut.style.width = this.$refs.img.width + 'px'
        this.$refs.cut.style.height = this.$refs.img.height + 'px'
        console.log(this.$refs.img.width)
        console.log(this.$refs.img.heigth)
      }
      img.src = imgSrc
      this.imgSrc = imgSrc
    }
  }
}
</script>

<style lang="scss">
.c-uploader {
  .c-uploader-preview {
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);

    width: 400px;
    height: 300px;
  }
  .c-uploader-cut {
    position: absolute;
    left: 0;
    top: 0;

    box-sizing: border-box;

    border: 1px solid rgb(0, 163, 255);

    .c-uploader-cut-dot {
      position: absolute;

      width: 8px;
      height: 8px;

      border-radius: 50%;
      background-color: rgb(0, 163, 255);

      &:nth-child(1) {
        left: -5px;
        top: -5px;
        cursor: nwse-resize;
      }
      &:nth-child(2) {
        left: 50%;
        top: -5px;
        transform: translateX(-50%);
        cursor: ns-resize;
      }
      &:nth-child(3) {
        right: -5px;
        top: -5px;
        cursor: nesw-resize;
      }
      &:nth-child(4) {
        left: -5px;
        top: 50%;
        transform: translateY(-50%);
        cursor: ew-resize;
      }
      &:nth-child(5) {
        right: -5px;
        top: 50%;
        transform: translateY(-50%);
        cursor: ew-resize;
      }

      &:nth-child(6) {
        left: -5px;
        bottom: -5px;
        cursor: nesw-resize;
      }
      &:nth-child(7) {
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        cursor: ns-resize;
      }
      &:nth-child(8) {
        right: -5px;
        bottom: -5px;
        cursor: nwse-resize;
      }
    }
  }
}
</style>
