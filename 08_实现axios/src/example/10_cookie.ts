import axios from "../axios";

const instance = axios.create({
  xsrfCookieName: 'XSRF-TOKEN-XN',
  xsrfHeaderName: 'X-XSRF-TOKEN-XN'
})

instance.get('/api/more/get').then(res => {
  console.log(res)
})