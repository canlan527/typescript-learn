// 构造签名
// JavaScript 函数也可以使用 new 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)，因为 他们会产生一个新对象。
// 你可以写一个构造签名( Construct Signatures )，方法是在调用签名前面加一个 new 关键词
class Person {

}

interface IPCTOR {
  new (): Person
}

// function factory(fn: () => void) {
function factory(fn: IPCTOR) {
  const res = new fn()
  return res;
}

factory(Person)