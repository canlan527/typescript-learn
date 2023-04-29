// 非空类型断言 ！

// 当我们需要使用一个可能有或者可能是undefined的变量的时候，可以使用类型缩小或者非空类型断言

interface IPerson {
  name: string,
  age: number,
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: 'coder',
  age: 18,
  friend: {
    name: '123'
  }
}

// ?. 可选链

// 无法使用可选链 = 左边
// info.friend?.name = 'why'  // 编译报错

// 解决方案1： 类型缩小
if(info.friend) {
  info.friend.name = 'why'
}

// 解决方案2： 非空断言 (只有确保friend一定有值的情况下，才能使用)
info.friend!.name = 'coder'
// console.log(info.friend?.name)

// 我get不到非空断言你的任何好处 用你不如不用你 债见！
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

// liveDangerously()


export {}