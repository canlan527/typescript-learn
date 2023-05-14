import axios from "../axios";

axios.post('/api/more/post', {
  name: 'jxz'
}, {
  auth: {
    username: 'jxz666',
    password: '123456'
  }
}).then(res => {
  console.log(res)
})

axios.post('/api/more/post', {
  name: 'jxz'
}, {
  auth: {
    username: 'jxz999',
    password: '123456'
  }
}).then(res => {
  console.log(res)
})