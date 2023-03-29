// symbol
// 在ES5中，如果我们是不可以在对象中添加相同的属性名称的，比如下面的做法

// const person = {
//   teacher: '程老师',
//   teacher: '王老师',
// }

// 常我们的做法是定义两个不同的属性名字:比如teacher1和teacher2。

// 但是我们也可以通过symbol来定义相同的名称，因为Symbol函数返回的是不同的值:

const s1:symbol = Symbol('title')
const s2:symbol = Symbol('title')

const person = {
  [s1]: '程老师',
  [s2]: '王老师'
}

console.log(person) //{ [Symbol(title)]: '程老师', [Symbol(title)]: '王老师' }

export {}