<template>
  <main-tab-bar class="mine-root">
    <view class="personal-info">
      <view class="avatar-box">
        <image src="@/static/picture/loadErr.svg" alt=""  mode="aspectFit"/>
      </view>
      <view class="info-box">
        <text class="nickname">昵称</text>
        <text class="phone">手机号</text>
      </view>
      <view class="extra-box" @click="goLogin">
        退出登录
        <u-icon name="arrow-right" />
      </view>
    </view>
  </main-tab-bar>
</template>

<script>
import MainTabBar from '@/components/layout/MainTabBar.vue'

export default {
  name: 'mine',
  components: { MainTabBar },
  data() {
    return {
      src: ''
    }
  },
  methods: {
    goLogin() {
      uni.navigateTo({
        url: '/pages/mine/login',
      })
    },
  },
}
</script>

<style scoped lang="scss">
.mine-root {
  --personal-height: 150rpx;
  --personal-top: 50rpx;
  --personal-left: 30rpx;
}

.personal-info{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: var(--personal-height);
  padding: var(--personal-top) var(--personal-left);
}

.avatar-box {
  background-color: #f9f9f9;
  width: var(--personal-height);
  height: var(--personal-height);
  border-radius: 10px;
  overflow: hidden;
  image {
    width: 100%;
    height: 100%;
  }
}

.info-box {
  width: var(--personal-width);
  height: var(--personal-height);
  margin: 0 5px;
  flex: 1;
  text {
    display: block;
    margin-bottom: 20rpx;
    font-size: 30rpx;
  }
  .nickname {
    margin-top: 10rpx;
    font-size: 40rpx;
  }
}

.extra-box {
  display: flex;
  flex-flow: row nowrap;
  padding: 8rpx 0;
}
</style>
