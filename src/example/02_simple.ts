import axios from "../axios";

axios({
  method: 'post',
  url: '/posts',
  params: {
    a: 1,
    b: 2
  }
})


axios({
  method: 'post',
  url: '/posts',
  headers: {
    'content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  data: {
    name: 'jxz',
    age: 20
  }
})

const arr = new Int32Array([21, 31])

axios({
  method: 'post',
  url: '/posts/buffer',
  data: arr
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  url: 'posts',
  method: 'post',
  data: searchParams
})
