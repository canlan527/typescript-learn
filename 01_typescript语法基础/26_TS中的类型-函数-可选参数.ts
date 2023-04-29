// 可选参数
// y 为可选参数，可选参数要放在必传参数的后面
// 可选参数的类型是联合类型，即指定的类型｜undefined，这里y的类型是 number｜undefined
// ts 5版本，也已经可以默认指定的类型了
function foo(x: number, y?: number) {
  // 对于类型不明确的变量 无法直接做计算操作,可以用类型缩小
  const z = y + 20; // 可以计算
  // 类型缩小
  if (y !== undefined) {
    const z2 = y + 200;
  }
}

foo(100);
foo(100, 200);

// 默认值
function bar(m:number, n:number=100) {

}
//默认值 指定n为100,可以用类型推倒出来参数n的类型
// function bar(m:number, n = 100) {

// }

bar(200)
bar(200, 200)

export {};
