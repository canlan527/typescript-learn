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