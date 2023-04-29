// 1. 字面量类型
const name: "why" = 'why'
let age = 10

// 2. 将多个字面量类型联合起来
type Direction = 'left' | 'right' | 'top' | 'bottom'
const d1: Direction = 'left'

// 栗子 封装请求方法
type MethodType = 'get' | 'post'
function request(url: string, method: MethodType) {

}

request('http://codercba.com/api/aaa', 'post')


// 栗子2
const info = {
  url: 'xxxx',
  method: 'post'
}

// request(info.url, info.method) // 报错 认为info.method是string类型
// 解决方案1：对象字面量的方式

const info2: {
  url: string;
  method: 'post';
} = {
  url: 'xxxx',
  method: 'post'
}
request(info2.url, info2.method)

// 解决方案2： 断言

const info3 = {
  url: 'xxxx',
  method: 'post'
}
request(info3.url, info3.method as 'post') // 将string类型的method断言成‘post’

// 解决方案3： as const
const info4 = {
  url: 'xxxx',
  method: 'post'
} as const; // 将info对象断言成字面量类型



export {}