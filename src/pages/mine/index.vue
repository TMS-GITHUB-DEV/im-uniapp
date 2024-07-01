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
import MainTabBar from '@/component/layout/MainTabBar.vue'
import {testGet, testPost} from "@/api/test";

export default {
  name: 'mine',
  components: { MainTabBar },
  onLoad(query) {
    // testGet().then(res => {
    //   console.log(res)
    // })
    // testPost().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })

    // uni.request({
    //   url: 'http://localhost:10101/test',
    //   success: res => {
    //     console.log(res)
    //   }
    // })
  }
}
</script>

<style scoped lang="scss">
.mine-root {
  background-color: #ff0;
  overflow-y: scroll;
}
</style>