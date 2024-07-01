const baseUrl = process.env['VUE_APP_BASE_API']

const req = (api, data, method) => {
    const url = `${baseUrl}${api}`
    console.log(url)
    return new Promise((resolve, reject) => {
        uni.request({
            url,
            data,
            method,
            success: res => {
                const { statusCode, data } = res
                if (statusCode !== 200) {
                    reject({
                        code: 4001,
                        msg: `[${statusCode}] 网络请求失败`
                    })
                }
                switch(data.code) {
                    case 200:
                        resolve(data.data)
                        break
                    default:
                        reject(data)
                        break
                }
            },
            fail: () => {
                reject({
                    code: 4002,
                    msg: '网络请求错误'
                })
            }
        })
    })
}

const get = (url, param) => {
    return req(url, param, 'GET')
}

const post = (url, data) => {
    return req(url, data, 'POST')
}

const put = (url, data) => {
    return req(url, data, 'PUT')
}

const del = (url, data) => {
    return req(url, data, 'DELETE')
}

export default {
    get,
    post,
    put,
    del
}
