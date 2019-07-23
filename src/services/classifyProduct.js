import request from '@/utils/request'

export function getList(params) {
  return request('/classifyProduct/list', {data: params})
}
