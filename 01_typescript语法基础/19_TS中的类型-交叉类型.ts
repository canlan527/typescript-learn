// & 交叉类型
// 要求当前变量要同时满足多种类型

type idType = number & string;  // 同时满足数字类型或者字符串类型：never

interface IKun {
  name: string
  age: number,
  hobby: string
}

interface ICoder {
  name: string,
  coder: () => void
}

// 定义一个info 要求同时满足以上两个对象的要求
const info: IKun & ICoder = {
  name: 'coder',
  age: 18,
  hobby: 'rap',
  coder: function() {
    console.log('正在coding')
  }
}

export {}