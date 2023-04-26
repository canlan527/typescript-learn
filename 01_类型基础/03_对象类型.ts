// 1. 数组
// 在 TypeScript 中有两种方式来声明一个数组类型：
const arr1: string[] = [];
const arr2: Array<string> = [];
const arr3: Array<number> = [];
const arr4: Array<any> = [];

// 2.元组
const tuple1: [string, string, number] = ['coder', 'jxz', 20]
const tuple2: [string, number?, number? ] = ['coder1']

// 具名元组
// 可以为元组中的元素打上类似属性的标记
const tuple3: [name: string, job: string, age: number] = ['jxz', 'student', 18]

// 考虑到某些拼装对象太麻烦，我们完全可以使用具名元组来做简单替换。
// 具名元组可选元素的修饰符将成为以下形式：
const tuple4: [name: string, job?: string, famale?: boolean] = ['jxz', 'student', false]

// 实际上除了显式地越界访问，还可能存在隐式地越界访问，如通过解构赋值的形式


const arr5: string[] = [];

const [ele1, ele2, ...rest] = arr5;

// 对于数组，此时仍然无法检查出是否存在隐式访问，因为类型层面并不知道它到底有多少个元素。
// 但对于元组，隐式的越界访问也能够被揪出来给一个警告
const arr6: [string, number, boolean] = ['linbudu', 599, true];

// 长度为 "3" 的元组类型 "[string, number, boolean]" 在索引 "3" 处没有元素。
const [name, age, male, other] = arr6;

// 使用元组确实能帮助我们进一步提升数组结构的严谨性，包括基于位置的类型标注、避免出现越界访问等


// 3. 对象
// 在 TypeScript 中我们也需要特殊的类型标注来描述对象类型，即 interface ，你可以理解为它代表了这个对象对外提供的接口结构。

interface IDescription {
  name: string;
  age: number;
  famale: boolean;
}

const p1: IDescription = {
  name: 'jxz',
  age: 20,
  famale: false,
}

// 这里的“描述”指：

// 每一个属性的值必须一一对应到接口的属性类型

// 不能有多的属性，也不能有少的属性，包括直接在对象内部声明，或是 obj1.other = 'xxx' 这样属性访问赋值的形式

// 除了声明属性以及属性的类型以外，我们还可以对属性进行修饰，常见的修饰包括可选（Optional） 与 只读（Readonly） 这两种。
interface IDescription2 {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const p2: IDescription2 = {
  name: 'jxz',
  age: 20,
  male: true,
  // 无需实现 func 也是合法的
};


export {};
