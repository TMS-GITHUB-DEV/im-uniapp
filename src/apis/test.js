import req from '@/apis/req'

export function testGet() {
    return req.get('test')
}

export function testPost() {
    return req.post('test')
}