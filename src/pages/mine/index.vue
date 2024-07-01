<template>
  <main-tab-bar>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>mine</view>
        <view>you</view>
  </main-tab-bar>
</template>

<script>
import MainTabBar from '@/components/layout/MainTabBar.vue'
import {fmtDt} from "@/filters";

export default {
  name: 'mine',
  components: { MainTabBar },
  onLoad(query) {
    const ts = 1719823287552
    console.log(fmtDt(ts))
    console.log(fmtDt(ts, 'MM-dd'))
    console.log(fmtDt(ts, 'MM-dd hh:mm'))
    console.log(fmtDt(ts, 'q'))
    console.log(fmtDt(ts, 'W'))
  }
}
</script>

<style scoped lang="scss">
.mine-root {
  background-color: #ff0;
  overflow-y: scroll;
}
</style>