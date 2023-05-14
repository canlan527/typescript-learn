import axios from "../axios";
import qs from 'qs';

axios.get('/api/more/get', {
  params: new URLSearchParams('name=jxz&age=20')
}).then(res => {
  console.log(res)
})

axios.get('/api/more/get', {
  params: {
    schoole: '一中',
    address: '北京市',
    hobby: ['basketball', 'run', 'football']
  }
}).then(res => {
  console.log(res)
})

const instance = axios.create({
  paramsSerializer(params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

instance.get('/api/more/get', {
  params: {
    schoole: '一中',
    address: '北京市',
    hobby: ['basketball', 'run', 'football']
  }
}).then(res => {
  console.log(res)
})