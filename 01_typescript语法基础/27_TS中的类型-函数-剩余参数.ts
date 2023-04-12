// 函数-剩余参数
function foo(...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }

  return total;
}

const res1 = foo(10, 20, 30);

const res2 = foo(100, 200, 300);
