import axios from "../axios";

axios({
  url: '/api/posts',
  method: 'post',
  data: {
    name: 'jxz',
    age: 20
  },
}).then(res => {
  console.log(res)
})

axios({
  url: '/api/posts',
  method: 'post',
  responseType: 'json',
  data: {
    job: 'fe',
    years: 4.5,
    address: '北京市朝阳区'
  }
}).then(res => {
  console.log(res)
})