<template>
  <view class="main-default-root" :style="`height: ${systemInfo.contentHeight - 100}rpx;`">
    <slot></slot>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: 'MainDefault',
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">
.main-default-root {
  overflow-y: auto;
}
</style>