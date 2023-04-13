// this

// 可推导的this类型

// 在没有对this进行特殊配置的情况下，this是any类型

// 1.对象中的this
const obj = {
  name: "why",
  studying: function () {
    console.log(this.name);
  },
};

obj.studying(); // 正常的调用
obj.studying.call({}); // 非正常调用,传入空对象，无法获取name属性

// 2.普通的函数
// function foo() {
//   console.log(this) //
// }

// foo()

// 终端进入当前目录，执行tsc --init
// vscode读取当前文件会根据tsconfig.json的配置来检查
// 上面的函数就报错 this "this" 隐式具有类型 "any"，因为它没有类型注释
// 在tsconfig.json文件中compilerOptions中的"noImplicitThis": true,设置意思是在文件中不允许有模糊的this存在

// 明确this的情况
/** 明确this的情况
 *  方法一："noImplicitThis": false
 *  方法二：指定this的类型
 */
// 如果要指定this 的类型，那么函数的第一个参数就要传递this的类型,名字也要叫this，函数的参数往后传
// this参数在编译后被抹除

function bar(this: { name: string }, name: string, age: number) {
  console.log(this, name, age);
}

// bar({name: 'why'}) // 报错，无法识别上下文，默认是window.bar()调用
// 正确调用 .call
bar.call({ name: "why" }, "why", 19);

export {};
