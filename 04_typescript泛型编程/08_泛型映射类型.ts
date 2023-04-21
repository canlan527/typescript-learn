// 映射类型 Mapped Types

interface IPerson {
  name: string,
  age: number,
}

// 映射IPerson
// 映射类型要结合索引类型使用
type MapPersonType<Type> = {
  // 属性来自传入的Type参数： 值 来自传入参数的属性对应的值Type[prop]
  [prop in keyof Type]: Type[prop]   
}

// 使用
const p: MapPersonType<IPerson> = {
  name: 'coder',
  age: 18
}

// 映射修饰符 Mapping Modifiers
// 在使用映射类型时，有两个额外的修饰符可能会用到: 
// 一个是 readonly，用于设置属性只读;
// 一个是 ? ，用于设置属性可选;

interface IKun {
  name: string,
  age: number,
  height: number,
  address: string,
}

// 映射的时候可以将传入的属性变为 只读/可选
type MapIKunType<Type> = {
  // [prop in keyof Type]?: Type[prop] // 表示将要映射的每个属性都是可选的
  // readonly [property in keyof Type]: Type[property]// 表示将要映射的每个属性都是只读的
  // 只读➕可选
  readonly [prop in keyof Type]?: Type[prop]
}

type IMapIKun =  MapIKunType<IKun> 

// name?: string;
// age?: number;
// height?: number;
// address?: string;

// readonly name?: string;
// readonly age?: number;
// readonly height?: number;
// readonly address?: string;


// 你可以通过前缀 - 或者 + 删除或者添加这些修饰符，如果没有写前缀，相当于使用了 + 前缀

interface IDemo {
  name: string,
  age?: number,
  address?: string,
  readonly height: number
}

// IDemo 中的属性有可选，有只读，我们在映射的时候可以使用前缀操作 ? 和 readonly 

type MapIDemo<Type> = {
  -readonly [prop in keyof Type]-?: Type[prop];
}

type TypeMapDemo = MapIDemo<IDemo>
// name: string;
// age: number;
// address: string;
// height: number;

export {}