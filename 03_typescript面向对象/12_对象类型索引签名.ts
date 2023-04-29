// 对象类型  -  索引签名
// 集合
interface ICollection {
  // 索引签名：之后可以通过索引来访问
  [index: number]: string  // [索引变量：索引类型]：返回值
  length: number


}
// 集合 可以通过索引的方式访问到

// const names: Array<string> = ['jxz', 'wsx', 'coder']
// const names: string[] = ['jxz', 'wsx', 'coder']
const names: string[] = ['jxz', 'wsx', 'coder']

// 迭代集合: 参数类型any[]并不好，无法描述参数的行为
function iteratorCollection(collection: ICollection) {

}

// const tuple: [string, number] = ['why', 18] // 定义元组类型数据
const tuple: [string, string] = ['why', '18'] // 定义元组类型数据

// 迭代元组数据
iteratorCollection(tuple)

const t1 = tuple[0]
const t2 = tuple[1]

// const info = { name: 'why', age: 19 } 
const info = { name: 'why', age: '19', length:10 } 
iteratorCollection(info)
// 直接放进来会报错
iteratorCollection({ name: 'why', age: '19', length:10 })



export {}