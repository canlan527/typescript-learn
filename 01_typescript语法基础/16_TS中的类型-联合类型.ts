// 联合类型
// |  基本使用
let foo: number | string = 123

foo = 'coder'

// 使用的时候要特别的小心 使用类型缩小
if(typeof foo === 'string') {
  console.log(foo.length)
}

// 案例： 打印id
function printID(id: number | string) {
  console.log('您的ID：', id)

  if(typeof id === 'string') {
    console.log(id.length)
  } else if(typeof id === 'number') {
    console.log(id)
  }
}

printID(123123)
printID('askdslfj134')



export {}