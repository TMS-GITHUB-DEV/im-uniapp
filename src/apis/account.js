import req from '@/utils/req'

export function normalLogin(data) {
  return req.post('account/login', data)
}