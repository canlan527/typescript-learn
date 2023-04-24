import { xnRequest2 } from "..";

// 定义查看更多数据接口
interface IEnireData {
  errcode: number,
  list: any[],
  totalCount: number
}

// 模拟发送网络请求
xnRequest2.request<IEnireData>({
  url: '/entire/list',
  params: {
    offset: 0,
    size: 20,
  }
}).then((res) => {
  console.log(res)
})

// 定义高评分数据接口
interface IHighScoreData {
  list: any[],
  subtitle: string,
  title: string,
  type: string,
  _id: string
}

// 模拟请求：需要被拦截
xnRequest2.request<IHighScoreData>({
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
}).then((res) => {
  console.log(res)
})