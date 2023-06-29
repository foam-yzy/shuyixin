import http from '../utils/request.js'

const apiFun = {}

apiFun.getlist = (params) => {
  return http.get('/api/calendar/day', params)
}

apiFun.saveJcInfo = (params) => {
  return http.post('/api/saveJcInfo', params)
}

// 暴露出这个对象
export default apiFun
