// 函数-联合类型-重载
// 场景：获取字符串或者数组的长度
// 1.普通的实现
// function getLength(args) {
//   return args.length;
// }

// getLength('typescript')
// getLength(['one','two','three'])

// 2.重载实现
// 方法一：1.1定义专用类型
function getLength(str: string): number;
function getLength(arr: any[]): number;
// 1.2 定义通用实现
function getLength(args: any) {
  return args.length;
}
// 调用
getLength("typescript");
getLength(["one", "two", "three"]);

// 方法二：联合类型
function getLength2(args: string | any[]): number {
  return args.length;
}

getLength2("typescript2");
getLength2(["2one", "2two", "2three"]);

// 在实现相同功能的时候，使用方法一和方法二都可以实现，更推荐使用方法二联合类型实现

// 只有在联合类型做不到的情况下，才使用重载

export {};
