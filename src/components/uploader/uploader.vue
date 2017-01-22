<template lang="html">
  <div class="c-uploader">
    <div class="c-uploader-preview">
      <img
        @mouseover.stop="onMouseoverCurimg"
        @mouseleave.stop="onMouseleaveCurimg"
        :src="currentImage"
        class="c-uploader-current"
        v-if="currentImage"
      />
      <span @click.stop="upload" v-else>+</span>
      <span v-show="isShowClip">裁剪</span>
    </div>
    <div class="c-uploader-selector">
      <div class="c-uploader-thumbnail" v-for="(image, idx) in images">
        <img :src="image" :data-idx="idx" @click.stop="onClickImg"/>
        <span @click.stop="deleteImg" :data-idx="idx">-</span>
      </div>
      <span class="c-uploader-input" v-if="images.length !== 3" @click.stop="upload">+</span>
    </div>
    <input
      ref="input"
      type="file"
      multiple
      hidden
      accept=".gif,.jpg,.jpeg,.png"
      @change="onChangeInput"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [],
      isShowClip: false
    }
  },

  computed: {
    currentImage () {
      return this.images[0]
    }
  },

  methods: {
    onMouseoverCurimg (e) {
      this.isShowClip = true
    },
    onMouseleaveCurimg (e) {
      this.isShowClip = false
    },
    onClickImg (e) {
      this.currentImage = this.images[e.currentTarget.dataset.idx]
    },
    deleteImg (e) {
      this.images.splice(e.currentTarget.dataset.idx, 1)
    },
    onChangeInput (e) {
      let imgLen = this.images.length

      if (!imgLen) {
        for (let i = 0; i < e.currentTarget.files.length; i++) {
          if (i >= 3) { // 暂时限制为3张图片
            break
          } else {
            let img = window.URL.createObjectURL(e.currentTarget.files[i])
            this.images.push(img)
          }
        }
      } else {
        for (let i = 0; i < e.currentTarget.files.length; i++) {
          if (i >= 3 - imgLen) {
            break
          } else {
            let img = window.URL.createObjectURL(e.currentTarget.files[i])
            this.images.push(img)
          }
        }
      }
    },
    upload () {
      this.$refs.input.click()
    }
  }
}
</script>

<style lang="scss" scoped>
.c-uploader {
  margin: 0 auto;

  width: 400px;
  height: 410px;

  border: 1px solid #000;
  border-radius: 5px;

  .c-uploader-preview {
    position: relative;

    width: 100%;
    height: 300px;
    line-height: 300px;

    background-color: #000;

    color: #fff;
    font-size: 100px;
    font-family: Microsoft Yahei;

    span {
      cursor: pointer;

      &:nth-child(2) {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;

        color: rgb(0, 163, 255);
        font-size: 30px;
      }
    }

    .c-uploader-current {
      position: relative;
      top: 15px;

      box-sizing: border-box;
      width: 360px;
      height: 270px;

      border: 1px dotted rgb(0, 163, 255);
      cursor: pointer;

      &:hover {
        filter: blur(5px);
      }
    }
  }

  .c-uploader-selector {
    padding: 10px;

    background-color: #fff;

    .c-uploader-thumbnail {
      position: relative;
      float: left;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }

      span {
        position: absolute;
        right: -6px;
        top: -6px;

        width: 16px;
        height: 16px;
        line-height: 16px;

        background-color: #f00;
        border-radius: 50%;
        cursor: pointer;

        color: #fff;
        font-size: 12px;
      }
    }

    img {
      width: 120px;
      height: 90px;

      border-radius: 5px;

      cursor: pointer;
    }
  }

  .c-uploader-input {
    float: left;

    box-sizing: border-box;
    width: 120px;
    height: 90px;
    line-height: 90px;

    border: 1px dotted #000;
    border-radius: 5px;
    cursor: pointer;

    color: #000;
    font-size: 40px;
    font-family: Microsoft Yahei;
  }
}
</style>
