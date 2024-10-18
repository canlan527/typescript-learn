"use strict";
console.log('hello typescript');
// 练习题
let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
};
let d = c.apple * 4;
// 尝试一些无效操作并修正
// let e =  a + c
let e = a + c.banana;
//# sourceMappingURL=index.js.map