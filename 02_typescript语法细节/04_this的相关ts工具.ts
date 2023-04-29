// this的内置工具使用
function foo(this: {name: 'why'}, name: string, age: number) {
  console.log(this)
}

// 获取函数的类型
type fooFnType = typeof foo 


/**
 * 工具1：获取函数里this的类型
 * 内置ThisParameterType，后接泛型<具体函数type>
 */
// type fooThisType = {
//   name: 'why';
// }
type fooThisType = ThisParameterType<fooFnType>


/**
 * 工具2：抹除this类型，留下剩下的类型
 * 内置OmitThisParameter,后接泛型<具体函数type>
 */
// PureFooType = (name: string, age: number) => void
type PureFooType = OmitThisParameter<fooFnType>  

/**
 * 工具3：绑定一个上下文的this类型，不返回转换过的类型
 * 内置ThisType
 */
// 栗子
interface IState {
  name: string,
  age: number
}

interface IStore {
  state: IState,
  eatting: () => void,
  running: () => void,
}
// 解决方法一：eatting(this: IState)
// const store: IStore = {
//   state: {
//     name: 'why',
//      age: 18
//   },
//   eatting(this: IState) {
//     console.log(this.name)
//   },
//   running(this: IState) {
//     console.log(this.name)
//   }
// }
// 解决方法二：ThisType<IState> 
const store: IStore & ThisType<IState> = {
  state: {
    name: 'why',
     age: 18
  },
  eatting() {
    console.log(this.name)
  },
  running() {
    console.log(this.name)
  }
}

store.eatting.call(store.state)


export {}