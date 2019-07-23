import request from '@/utils/request'

export function getList(params) {
  return request('/product/list')
}
