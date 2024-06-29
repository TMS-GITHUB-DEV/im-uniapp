<template>
  <view class="nav-root">
    <view class="status-bar"></view>
    <view class="nav-bar"></view>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: 'NavBar',
  // todo 自定义导航栏背景色 | 是否显示左侧返回按钮 | 自定义标题插槽
  // 自定义导航栏背景图
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">
.nav-bar {
  height: 100rpx;
}
</style>