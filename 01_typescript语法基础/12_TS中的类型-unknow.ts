// unknow  

let id: unknown = 'why'

id = 123123123;

id = {uid: '12312ldsk'}

// console.log(id.length) // 报错
//如何操作  类型缩小
if(typeof id === 'string'){ 
  console.log(id.length) //要求必须进行类型校验，才能根据类型缩小后的类型，进行对应类型的操作
}


console.log(id)

// unknown类型的值上做任何事情都是不合法的;
export {}