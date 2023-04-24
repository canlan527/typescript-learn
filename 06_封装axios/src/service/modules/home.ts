// 伪代码
import xnRequest from "..";

// 发送网络请求
xnRequest.request({
  url: '/home/multidata'
}).then((res) => {
  console.log(res.data)
})