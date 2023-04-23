import { xnRequest2 } from "..";

// 模拟发送网络请求
xnRequest2.request({
  url: '/entire/list',
  params: {
    offset: 0,
    size: 20,
  }
}).then(res => {
  console.log(res.data)
})


// 模拟请求：需要被拦截
xnRequest2.request({
  url: '/home/highscore',
  interceptors: {
    requestSuccessFn(config) {
      console.log('/home/highscore 请求成功的拦截')
      return config
    },
    responseSuccessFn(res) {
      console.log('/home/highscore 响应成功的拦截')
      return res;
    }
  }
})  