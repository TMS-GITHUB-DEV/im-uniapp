<template>
  <view class="nav-bar-root" :style="`height: ${systemInfo.screenHeight}rpx;`">
    <nav-bar>
      <slot name="nav"></slot>
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
  name: 'NavBarMain',
  components: { NavBar },
  data() {
    return {
      systemInfo
    }
  }
}
</script>

<style scoped lang="scss">

</style>