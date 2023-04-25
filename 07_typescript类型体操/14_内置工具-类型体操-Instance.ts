// InstanceType 构造函数的类型
class Person {}
class Dog {}

// 工厂函数批量构造类
function factory<T extends new(...args: any[]) => any>(ctor: T): InstanceType<T> {
  return new ctor()
}

const p1 = factory(Person)
const d1 = factory(Dog)

// 实现
type MyInstanceType<T extends new(...args: any[]) => any> = T extends new(...args: any[]) => infer R ? R : never;

type resFnType = MyInstanceType<typeof Person>
type resDogType = MyInstanceType<typeof Dog>

function factory2<T extends new(...args: any[]) => any>(ctor: T): MyInstanceType<T> {
  return new ctor()
}

const p2 = factory2(Person)
const d2 = factory2(Dog)


export {}