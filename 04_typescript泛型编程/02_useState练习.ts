// 练习 useState函数
function useState<Type>(initValue:Type):[Type, (newState:Type) => void] {
  let state = initValue
  function setState(newState:Type) {
    state = newState;
  }
  return [state, setState]
}

const [x , setX] = useState(0)
const [y, setY] = useState('hello')
const [list, setList] = useState(['coder', 'why'])
const [arr, setArr] = useState<number[]>([]) // 指定数组类型



export {}