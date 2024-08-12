const pxToRpx = px => {
  return px * systemInfo.baseScale
}

const rpxToPx = rpx => {
  return rpx / systemInfo.baseScale
}

const systemInfo = {
  statusBarHeight: 0,
  windowHeight: 0,
  screenWidth: 0,
  screenHeight: 0,
  baseScale: 0,
  contentHeight: 0,
  navHeight: 100,
  tabHeight: 110
}

const initSystemInfo = () => {
  const baseSystemInfo = uni.getSystemInfoSync()
  systemInfo.baseScale = 750 / baseSystemInfo.screenWidth
  systemInfo.statusBarHeight = pxToRpx(baseSystemInfo.statusBarHeight)
  systemInfo.windowHeight = pxToRpx(baseSystemInfo.windowHeight)
  systemInfo.screenWidth = pxToRpx(baseSystemInfo.screenWidth)
  systemInfo.screenHeight = pxToRpx(baseSystemInfo.screenWidth)
  systemInfo.contentHeight = systemInfo.windowHeight - systemInfo.statusBarHeight
  console.log(baseSystemInfo)
}

export {
  systemInfo,
  initSystemInfo,
  pxToRpx,
  rpxToPx
}
