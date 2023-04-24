// 伪代码
import xnRequest from "..";

// 定义home数据接口
interface IHomeData {
  data: any,
  returnCode: string,
  success: boolean
}

// 发送网络请求
xnRequest.request<IHomeData>({
  url: '/home/multidata'
}).then((res) => {
  console.log(res)
})