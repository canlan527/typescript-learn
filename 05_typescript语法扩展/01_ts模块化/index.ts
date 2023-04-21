import { sum } from "./utils/math";
// type关键字 提示引入的是type类型，当前文件编译成js后回删掉当前行代码
import type { PersonType, IPerson } from "./utils/math";

const s1 = sum(10, 20);

const p1: PersonType = {
  name: "coder",
  age: 20,
};

const p2: IPerson = {
  name: "coder",
  age: 20,
  height: 1.99,
};
