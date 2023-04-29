// 内置工具 - 类型体操
// 2.Record<keys, Type>  keys必须是t1中的，Type 必须附和IKun类
type t1 = '北京' | '上海' | '深圳'

interface IKun {
  name: string,
  age?: number,
  slogan?: string
}

type RecordIKun = Record<t1,IKun>
// type RecordIKun = {
//   北京: IKun;
//   上海: IKun;
//   深圳: IKun;
// }
// 出来的结果类型:
const ikun:RecordIKun = {
  '北京': {
    name: 'coder'
  },
  '上海': {
    name: 'why'
  },
  '深圳': {
    name: 'abc'
  }
}

// 知识点1
type keys = keyof any
// key = string | number | symbol
// 因为只有以上三种类型可以在对象里做键key

// 知识点2 res是ikun的任意一个键名 'name' | 'age' | 'slogan'
type res = keyof IKun

const k: res = 'name' 
const k2: res = 'age'
const k3: res = 'slogan'

// 类型体操
type MyRecord<K extends keyof any,T> = {
  [P in K]: T
}

// 应用
type RecordIKun2 = MyRecord<t1, IKun>

const ikun2: RecordIKun2 = {
  '北京': {
    name: 'coder'
  },
  '上海': {
    name: 'why'
  },
  '深圳': {
    name: 'abc'
  }
}

export {}
