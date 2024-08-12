<template>
  <view>
    <u-list>
      <u-list-item v-for="(page, index) in pages" :key="index">
        <u-cell
            v-if="index < 4"
            :title="page.style.navigationBarTitleText"
            :value="page.path"
            @click="gotoTabBar(page.path)"
            isLink
        />
        <u-cell
            v-else
            :title="page.style.navigationBarTitleText"
            :value="page.path"
            :url="`/${page.path}`"
            isLink
        />
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
import pages from '@/pages.json'

export default {
  name: 'debug',
  data() {
    return {
      pages: pages.pages
    }
  },
  methods: {
    gotoTabBar(path) {
      uni.switchTab({
        url: `../../${path}`
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>