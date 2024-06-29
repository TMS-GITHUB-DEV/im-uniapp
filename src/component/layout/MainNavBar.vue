<template>
  <view class="main-nav-bar-root" :style="`height: ${systemInfo.screenHeight}rpx;`">
    <nav-bar
      :title="navTitle"
      :bgc="navBgc"
      :showBack="navShowBack"
      :backColor="navBackColor"
    >
      <template #back>
        <slot name="nav-back"></slot>
      </template>
      <template #title>
        <slot name="nav-title"></slot>
      </template>
    </nav-bar>
    <view class="main" :style="`height: ${systemInfo.contentHeight - 100}rpx;`">
      <slot></slot>
    </view>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'
import NavBar from '@/component/layout/NavBar.vue'

export default {
  name: 'MainNavBar',
  components: { NavBar },
  props: {
    navTitle: {
      type: String,
      default() {
        return ''
      }
    },
    navBgc: {
      type: String,
      default() {
        return '#fff'
      }
    },
    navShowBack: {
      type: Boolean,
      default() {
        return true
      }
    },
    navBackColor: {
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
  }
}
</script>

<style scoped lang="scss">
.main {
  overflow-y: auto;
}
</style>