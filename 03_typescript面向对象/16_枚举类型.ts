// 枚举类型
// 枚举其实就是将一组可能出现的值，一个个列举出来，定义在一个类型中，这个类型就是枚举类型; 
// 枚举允许开发者定义一组命名常量，常量可以是数字、字符串类型

// 定义枚举类型  默认是 0 1 2 3
enum Direction {
  UP = 100, // 自定义初值后面一次递增 101 102 103
  DOWN,
  LEFT = 'LEFT', // 自定义初值为字符串值，后面的无法递增，也需要自定义
  RIGHT = 'RIGHT'
}

const d1: Direction = Direction.UP

console.log(d1)

function turnDirection(direction: Direction) {
  switch(direction) {
    case Direction.LEFT:
      console.log('角色向左移动一个空格')
      break;
    case Direction.RIGHT:
      console.log('角色向右移动一个空格')
      break;
    case Direction.UP:
      console.log('角色向上移动一个空格')
      break;
    case Direction.DOWN:
      console.log('角色向下移动一个空格')
      break;
    default:
      console.log('请按键盘方向键进行移动')
      return;
  }
}

// 监听键盘的点击
turnDirection(Direction.LEFT)


enum Operation {
  Read = 1 << 0, // 位运算 0001
  Write = 1 << 1,  // 0010
  foo = 1 << 2, // 0100
}

// 枚举类型中使用位运算是为了方便以后可以设置属性联合  Read & Write  0001+0010 = 0011

export {}