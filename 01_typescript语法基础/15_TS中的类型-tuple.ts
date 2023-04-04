// tuple 元组

// 保存个人信息
// 方式1：数组
const info1: any[] = ["coder", 18, 1.88];
console.log(info1[2]); // 无法得知当前项的类型

// 方式2：对象
const info2 = {
  name: "coder",
  age: 18,
  height: 1.88,
};

// 缺点：会有多余的键名

// 方式3：元组
const info3: [string, number, number] = ["coder", 18, 1.88];
console.log(info3[2]); // 可以正常拿到该项的类型

//实现useState
function useState(initialValue: number): [number, (value: number) => void] {
  let value = initialValue;
  function setValue(newValue: number) {
    value = newValue;
  }
  // 调用render
  // 返回value和设置value的方法
  return [value, setValue];
}
const [count, setCount] = useState(0);

console.log(count);
setCount(123);


export {};
