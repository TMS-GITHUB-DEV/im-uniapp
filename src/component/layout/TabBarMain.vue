<template>
  <view class="tab-bar-root" :style="`height: ${systemInfo.contentHeight - 100}rpx;`">
    <slot></slot>
  </view>
</template>

<script>
import { systemInfo } from '@/utils/layout'

export default {
  name: "TabBarMain",
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">

</style>