<template>
  <u-overlay class="overlay-box" :show="loading" @click="clickToClose && (loading = false)">
    <view class="loading-box">
      <u-loading-icon :mode="mode ? mode : undefined" :color="color" size="100"/>
      <text :style="`color: ${color}`">
        {{ text }}
      </text>
    </view>
  </u-overlay>
</template>

<script>
export default {
  name: 'loading',
  props: {
    text: {
      type: String,
      default: '正在加载',
      validator(value) {
        return value ? value.length < 10 : true
      }
    },
    mode: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'circle', 'semicircle'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: '#fff',
      validator(value) {
        return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)
      }
    },
    clickToClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style scoped lang="scss">
.overlay-box {
  .loading-box {
    background-color: rgba(0, 0, 0, 0.60);
    margin: auto;
    padding: 50rpx;
    border-radius: 15rpx;
    width: 250rpx;
    height: 250rpx;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    color: #fff;
    text {
      margin-top: 40rpx;
      text-align: center;
    }
  }
}
</style>