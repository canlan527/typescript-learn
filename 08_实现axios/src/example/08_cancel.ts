import axios, { Canceler } from "../axios";

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/api/cancel/get', {
  cancelToken: source.token
}).catch(e => {
  if(axios.isCancel(e)) {
    console.log(`Request canceled: ${e.message}`)
  }
})


setTimeout(() => {
  source.cancel('Operation  canceled by the user')

  axios.post('/api/cancel/post', { name: '赤井秀一' }, {
    cancelToken: source.token
  }).catch(e => {
    if(axios.isCancel(e)) {
      console.log(e.message)
    }
  })
}, 500)


let cancel: Canceler

axios.get('/api/cancel/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
}).catch(e => {
  if(axios.isCancel(e.message)) {
    console.log('Request canceled')
  }
})


setTimeout(() => {
  cancel()
}, 800)
