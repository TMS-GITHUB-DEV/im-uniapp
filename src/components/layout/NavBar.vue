<template>
  <view class="nav-bar-root">
    <view class="status-bar"></view>
    <view class="nav-bar" :style="`background-color: ${bgc};`">
      <view v-if="showBack" class="back">
        <slot name="back" v-if="$slots.back"></slot>
        <view v-else class="back-default df aic px10" @click="goBack">
          <u-icon name="arrow-left" class="back-icon" :color="backColor" />
          <view class="back-text" :style="`color: ${backColor}`">返回</view>
        </view>
      </view>
      <!-- 这里showBack逻辑还得完善 -->
      <view class="title df aic jcc" :class="showBack ? '' : 'full'">
        <slot name="title" v-if="$slots.title"></slot>
        <view v-else class="title-text">
          {{ title }}
        </view>
      </view>
      <view v-if="showBack" class="more"></view>
    </view>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: 'NavBar',
  // 自定义导航栏背景图，还没做
  props: {
    bgc: {
      type: String,
      default() {
        return '#fff'
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    showBack: {
      type: Boolean,
      default() {
        return true
      }
    },
    backColor: {
      type: String,
      default() {
        return '#808080'
      }
    }
  },
  data() {
    return {
      systemInfo
    }
  },
  methods: {
    goBack() {
      uni.navigateBack()
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar-root {
  --height-nav: 100rpx;
  --width-back: 120rpx;
}

.nav-bar {
  height: var(--height-nav);
  display: flex;
  overflow: hidden;
}

.back, .more {
  width: var(--width-back);
}

.title {
  width: calc(100vw - var(--width-back) * 2);
}

.title.full {
  width: 100%;
}

.back-default {
  height: var(--height-nav);
}

.back-icon {
  width: 30rpx;
}

.title-text {
  font-size: 32rpx;
  line-height: 47rpx;
  padding: 3rpx;
  text-align: center;
  overflow: hidden;
  display: -webkit-box; /* 使元素成为一个弹性伸缩盒子模型 */
  -webkit-box-orient: vertical; /* 子元素垂直排列 */
  -webkit-line-clamp: 2; /* 设置最多显示的行数 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
}
</style>