export function fmtDt(ms, fmt = 'yyyy-MM-dd hh:mm:ss', defaultVal = '-') {
  if (!ms || ms <= 0) {
    return defaultVal
  }

  const date = new Date(ms)
  const month = date.getMonth()
  const o = {
    'M+': month + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor(( month + 3 ) / 3),
    'S': date.getMilliseconds(),
    'W': `周${'日一二三四五六'[date.getDay()]}`
  }

  let match, replace
  while (( match = /(y+)/.exec(fmt) )) {
    replace = ( date.getFullYear() + '' ).slice(-match[0].length)
    fmt = fmt.replace(match[0], replace.padStart(match[0].length, '0'))
  }

  for (let k in o) {
    while (( match = new RegExp(`(${k})`).exec(fmt) )) {
      let pad = match[1].length > 1 ? '00' : ''
      replace = `${o[k]}`
      fmt = fmt.replace(match[0], replace.padStart(match[1].length, pad))
    }
  }

  // if (/(y+)/.test(fmt)) {
  //     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  // }
  // for (const k in o) {
  //     if (new RegExp('(' + k + ')').test(fmt)) {
  //         fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' +
  // o[k]).length))) } }
  return fmt
}
