<template>
<!-- todo windowHeight要改成screenHeight 大概 -->
  <view class="main-full-root" :style="`height: ${systemInfo.windowHeight};`">
    <slot></slot>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: 'MainFull',
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">
.main-full-root {
  overflow-y: auto;
}
</style>