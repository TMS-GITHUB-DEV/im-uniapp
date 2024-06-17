<template>
<!--	<view class="content">-->
<!--		<image class="logo" src="/static/logo.png"></image>-->
<!--		<view>-->
<!--			<text class="title">{{title}}</text>-->
<!--		</view>-->
<!--	</view>-->
  <view>
    <u-cell-group>
      <u-cell icon="setting-fill" title="个人设置"></u-cell>
      <u-cell icon="integral-fill" title="会员等级" value="新版本"></u-cell>
    </u-cell-group>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
