import qs from 'qs'
import axios,{ AxiosTransformer } from '../axios'

// axios.defaults.headers.common['t22est2'] = 'abc'

// axios({
//   url: '/api/config/post',
//   method: 'post',
//   data: qs.stringify({
//     a: 1
//   }),
//   headers: {
//     test: 'xyz'
//   },
// }).then(res => {
//   console.log(res.data)
// })

axios({
  transformRequest: [(function(data) {
    return qs.stringify(data)
  }), ...(axios.defaults.transformRequest as AxiosTransformer[])],
  transformResponse: [...(axios.defaults.transformResponse as AxiosTransformer[]), function(data) {
    if(typeof data === 'object') {
      data.b = 'hello tomorrow'
    }
    return data
  }],
  url: '/api/config/post',
  method: 'post',
  data: {
    a: 1
  }
}).then(res => {
  console.log(res.data)
})