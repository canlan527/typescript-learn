import axios from "../axios";

axios({
  method: 'get',
  url: '/posts',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'get',
  url: '/posts',
  params: {
    foo: ['name', 'age']
  }
})

axios({
  method: 'get',
  url: '/posts',
  params: {
   info: {
     address: '北京市朝阳区'
   }
  }
})

const date = new Date()

axios({
  method: 'get',
  url: '/posts',
  params: {
   date
  }
})

axios({
  method: 'get',
  url: '/posts',
  params: {
    foo: '@:$, '
  }
})


axios({
  method: 'get',
  url: '/posts',
  params: {
    param1: 'jxz',
    param2: null
  }
})

axios({
  method: 'get',
  url: '/posts#hash1234',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'get',
  url: '/posts/name=jxz',
  params: {
    age: 20
  }
})