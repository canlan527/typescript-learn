import axios from "../axios";

axios({
  method: 'get',
  url: '/posts',
  params: {
    a: 1,
    b: 2
  }
})