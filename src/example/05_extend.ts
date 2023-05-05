import axios from "../axios";

// axios({
//   url: '/api/posts',
//   method: 'post',
//   data: {
//     msg: 'hello~'
//   }
// })

// axios.request({
//   url: '/api/posts',
//   method: 'post',
//   data: {
//     msg: 'typescript'
//   }
// })

// axios.get('/api/posts').then(res => {
//   console.log(res)
// })

// axios.post('/api/posts')

// axios.put('/api/posts',{msg: '科学家灰原哀'})

// axios.head('/api/extend/head')

// axios.options('/api/extend/options')

// axios.delete('/api/extend/delete')

// axios.patch('/api/extend/patch', {msg: 'patch赤井秀一'})

axios({
  url: '/api/posts',
  method: 'post',
  data: {
    msg: 'hello~'
  }
})

axios('/api/posts', {
  method: 'post',
  data: {
    msg: '秀哀一生推'
  }
})

