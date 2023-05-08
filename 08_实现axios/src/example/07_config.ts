import qs from 'qs'
import axios from '../axios'

axios.defaults.headers.common['t22est2'] = 'abc'

axios({
  url: '/api/config/post',
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: 'xyz'
  },
}).then(res => {
  console.log(res.data)
})