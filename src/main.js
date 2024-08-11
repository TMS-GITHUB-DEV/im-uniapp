import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
import { initSystemInfo } from '@/utils/layout'

import uView from 'uview-ui'

Vue.use(uView)

Vue.config.productionTip = false

App.mpType = 'app'

initSystemInfo()

uni.$u.setConfig({
  config: {
    unit: 'rpx'
  },
  props: {
    radio: {
      size: 15
    }
  }
})

const app = new Vue({
  ...App
})
app.$mount()
