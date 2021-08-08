import request from '@/utils/request'

export default function getData() {
  return request('/api/getdata')
}