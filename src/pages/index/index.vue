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
      console.log(process.env)
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
