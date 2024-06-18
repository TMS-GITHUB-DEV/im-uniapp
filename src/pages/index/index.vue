<template>
  <view>
    <u-button @click="gotoDebug">go to debug</u-button>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		onLoad() {

		},
		methods: {
      gotoDebug() {
        uni.navigateTo({
          url: '/pages/debug/index'
        })
      }
    }
	}
</script>

<style lang="scss">

</style>
