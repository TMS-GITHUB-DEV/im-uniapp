<template>
  <view class="main-tab-bar-root" :style="`height: ${systemInfo.contentHeight - systemInfo.tabHeight}rpx;`">
    <slot></slot>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: 'MainTabBar',
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">
.main-tab-bar-root {
  overflow-y: auto;
}
</style>