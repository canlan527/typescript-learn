# TypeScript 编程

学习 TypeScript 编程 --Boris Cherry著 （安道译）

## 概述
### 编译器 Compiler
对程序运行原理的理解：
程序由一些文件构成，文件中是你编写的文本。这些文本由一个特殊的程序解析，即编译器。编译器将程序转成抽象句法树 (Abstract Syntax Tree, AST)。
AST 是一种去掉了空白、注释、缩进用的制表符或空格之后的数据结构。
编译器将 AST 转换成一种称为字节码 (Bytecode) 的低层表示。
字节码再传给运行时程序计算，得到最终结果。
也就是说，运行程序就是让运行时计算由编译器从解析源码得到的 AST 生成的字节码。

综上所述，步骤如下：
1. 把程序解析成 AST
2. 把 AST 转换成字节码
3. 运行字节码得到结果

TypeScript 的特殊之处就在于，它不直接编译成字节码，而是编译成 JavaScript 代码。然后让浏览器或者 Node.js 运行 JavaScript 代码。

而在 TypeScript 编译器生成 AST 后，真正运行代码之前，TypeScript 会对代码做类型检查。

#### 类型检查器
类型检查器：检查代码是否符合类型安全要求的特殊程序。

TypeScript 从编译到运行的过程大致如下：

|        | 1.TypeScript源码 -> TypeScript  AST      |
| :----: | :--------------------------------------- |
| **TS** | **2.类型检查器检查AST**                  |
|        | **3. TypeScript AST -> JavaScript 源码** |
|        | **4. JavaScript源码 -> JavaScript AST**  |
| **JS** | **5. AST -> 字节码**                     |
|        | **6. 运行时计算字节码**                  |

>  第1~3步由 TSC 操作，4~6步由浏览器/ NodeJS 或者其他 JavaScript 引擎中的 JavaScript 运行时操作。

（JavaScript 编译器和运行时通常聚在一个成为引擎的程序中。V8、JSCore 都是如此）

### 类型系统
类型系统：类型检查器为程序分配类型时使用的一系列规则。
- 显示注解类型
- 自动推导类型
  

多数情况下都把工作交给 TypeScript 的推导功能，这是最好的情况，少数情况下才显示注解类型。

#### TypeScript VS. JavaScript

比较 JavaScript 和 TypeScript 的类型系统

| 类型系统特性       | JavaScript         | TypeScript         |
| ------------------ | ------------------ | ------------------ |
| 类型是如何绑定的？ | 动态               | 静态               |
| 是否自动转换类型   | 是                 | 否（多数时候）     |
| 何时检查类型       | 运行时             | 编译时             |
| 何时报告错误       | 运行时（多数时候） | 编译时（多数时候） |

