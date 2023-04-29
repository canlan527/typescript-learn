// 专门用来声明类型的文件 一般命名成.d.ts 它仅仅用来做类型检测，告知typescript我们有哪些类型
// 全局起作用
interface IPerson {
  name: string,
  age: number
}

// type PersonType = {
//   slogan: string
// }
// 类型声明
// 1. 内置类型
// 内置类型声明是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件; 
// 包括比如Function、String、Math、Date等内置类型;
// 也包括运行环境中的DOM API，比如Window、Document等;
// TypeScript 使用模式命名这些声明文件lib.[something].d.ts

// https://github.com/microsoft/TypeScript/tree/main/src/lib

// const div: HTMLDivElement= document.querySelector() // 转到类型定义查看HTMLDivElement

// declare var HTMLDivElement: {
//   prototype: HTMLDivElement;
//   new(): HTMLDivElement;
// };

// const img: HTMLImageElement = document.querySelector('.img') // 转到类型定义查看 HTMLImageElement

// declare var HTMLImageElement: {
//   prototype: HTMLImageElement;
//   new(): HTMLImageElement;
// };

// Document  // 转到类型定义查看Document

// declare var Document: {
//   prototype: Document;
//   new(): Document;
// };


// 2. 外部定义类型声明
// 指一些第三方库 axios  react
