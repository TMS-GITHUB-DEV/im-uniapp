<template>
  <main-tab-bar>
    <u-button @click="gotoDebug">go to debug</u-button>
  </main-tab-bar>
</template>

<script>
import MainTabBar from '@/components/layout/MainTabBar.vue'

export default {
  components: { MainTabBar },
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
