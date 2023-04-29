// never
// 应用场景：
// 1.开发中很少实际去定义 never 类型， 某些情况下会自动进行类型推导出never
// 2.开发框架工具的时候可能会用到never
// 3.封装一些类型工具的时候，可以使用never。类型体操的题目：never

function foo():never {
  // while(true) {

  // }
  throw new Error('报错信息')
}
// foo()

// 封装一个工具函数 处理message
function handleMessage(message: number | string | boolean) {
  switch(typeof message) {
    case 'string':
      console.log(message.length)
      break;
    case 'number': 
      console.log(message)
      break;
    case 'boolean':
      console.log(message)
      break;
    default:
      const check: never = message

  }
}
handleMessage('你是我的歌')

handleMessage(123101010)

// 后来的开发这不了解这个工具函数
handleMessage(true)
export {}