import axios from "../axios";

axios({
  url: '/api/taking',
  method: 'get'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
 
axios({
  url: '/api/taking1', //故意写错url
  method: 'get',
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

// 模拟网络错误
setTimeout(() => {
  axios({
    url: '/api/taking',
    method: 'get',
  }).then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err)
  })
}, 5000)

// 模拟超时时间
// 由于后端配置返回数据时间为3000ms，这里设置超时时间2000ms会超时
axios({
  url: '/api/taking/timeout',
  method: 'get',
  timeout: 2000, // 配置超时时间
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})

