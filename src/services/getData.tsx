import request from '@/utils/request'

export default function getData() {
  return request('/api/getdata')
}

export function getEditorCode() {
  return request('/api/geteditorcode')
}