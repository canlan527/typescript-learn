// 类型缩小
// 什么是类型缩小呢?
// 类型缩小的英文是 Type Narrowing(也有人翻译成类型收窄);
// 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径; 
// 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小( Narrowing ); 
// 而我们编写的 typeof padding === "number 可以称之为 类型保护(type guards);

// 常见的类型保护有如下几种: 
// typeof
// 平等缩小(比如===、!==)  
// instanceof
// in 等等

// 1.typeof

function printID(id: number | string) {
  if(typeof id === 'number') { 
    // 这里确定属于number类型
    console.log(id)
  } else if(typeof id === 'string') {
    // 这里确定属于string类型
    console.log(id.length, id.split(' '))
  }
}

// 2. 平等缩小 switch  ===  !==   ==   !=

type Direction = 'left' | 'right' | 'up' | 'down'

function switchDirection(direction: Direction) {
  console.log(direction)
  if(direction === 'left') {
    console.log(direction, '角色向左移动')
  } else if(direction === 'right') {
    console.log(direction ,'角色向右移动')
  }

  switch(direction) {
    case 'left':
      console.log(direction, '角色向左移动')
      break;
    case 'right':
      console.log(direction, '角色向右移动')
      break;
    case 'up':
      console.log(direction, '角色向上移动')
      break;
    case 'down':
      console.log(direction, '角色向下移动')
      break;
    default:
      console.log('角色没有移动')
      break;
  }
}


// 3. 传入一个日期，打印日期
function printData(date: string | Date) {
  // if(typeof date === 'string') {
  //   console.log(date)
  // } else {
  //   console.log(date.getTime())
  // }
  if(date instanceof Date) {  // instanceof 类型缩小判断是否是Date的实例
    console.log(date.getTime())
  } else {
    console.log(date)
  }
}

// 4. in操作符 判断是否有某一个属性
interface ISwim {
  swim: () => void
}

interface IRun {
  run: () => void
}

function move(animal: ISwim | IRun) {
  console.log(animal)
  if("swim" in animal) {
    animal.swim()
  } else if('run' in animal) {
    animal.run()
  }
}

const fish:ISwim = {
  swim() {
    console.log('swimming~~')
  }
}

const dog:IRun = {
  run() {
    console.log('running~~~')
  }
}
move(fish)
move(dog)

export {}