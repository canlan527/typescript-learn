// object 
// 1、什么都不写，默认类型推导
const info = {
  name: 'coderone',
  age: 18
}

// 使用type 定义, 定义的属性必须和实际对象属性完全匹配，多一个少一个都不行
type infoType = {
  name: string,
  age: number,
  height: number
}

const info2: infoType = {
  name: 'codertwo',
  age: 19,
  height: 1.88,
}

console.log(info2.name)
console.log(info2.age)


// 字面量定义类型
const info3: {
  name: string,
  age: number,
} = {
  name: 'coderthree',
  age: 20
}

// 不能使用的方式：object，这样定义出来是空对象
const info4: object = {
  name: 'coderfour',
  age: 21,
}

// console.log(info4.name) // 报错 类型“object”上不存在属性“name”。



export {}
