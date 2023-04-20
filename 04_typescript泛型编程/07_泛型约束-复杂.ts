// 泛型约束
// 举个栗子:我们希望获取一个对象给定属性名的值 
// 我们需要确保我们不会获取 obj 上不存在的属性; 
// 所以我们在两个类型之间建立一个约束;

// 传入的key类型，应该是obj当中的key之一 
function getObjectProperty(obj, key) {
  return obj[key]
}

const info = {
  name: 'jxz',
  age: 18,
  height: 1.88
}

const name = getObjectProperty(info, 'name')

// 修改
function getObjectProperty2<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

getObjectProperty2(info, 'address') // 提醒报错
export {}