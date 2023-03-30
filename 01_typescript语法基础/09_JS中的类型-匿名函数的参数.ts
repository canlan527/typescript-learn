// ts 会自动推导匿名函数的参数类型，我们可以不用画蛇添足的加入类型

const arr = ['one', 'two','three']
//我们并没有指定item的类型，但是item是一个string类型
//这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型;
// 这个过程称之为上下文类型(contextual typing)，因为函数执行的上下文可以帮助确定参数和返回值的类型
arr.forEach((item, index, arr) => {

})


export  {}