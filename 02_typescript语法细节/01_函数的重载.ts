// 重载
// 案例
// 写一个函数可以相加数字，或者拼接字符串
function sum(x, y) {
  return x + y;
}

sum(10, 20)
sum('你好','替艾斯')
sum({name: 'why'}, '123') // 传入的数据格式不对也无法检测

// 解决方法
// ts中的函数重载写法
// 1.编写重载签名
function add(m: number, n: number) : number 
function add(str1: string, str2: string) : string

// 2.编写函数的通用实现
function add(args1: any, args2: any): any {
  return args1 + args2
}

add(10, 20)
add('hello', 'ts')

// 通用函数不能被调用
// add({n:123, m : 123})
// add('123', 111)

export {}