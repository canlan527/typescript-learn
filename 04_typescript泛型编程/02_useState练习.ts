// 练习 useState函数
function useState<Type>(initValue:Type):[Type, (n:Type) => void] {
  let state = initValue
  function setState(value) {
    state = value;
  }
  return [state, setState]
}

const [x , setX] = useState(0)
const [y, setY] = useState('hello')
const [list, setList] = useState(['coder', 'why'])
const [arr, setArr] = useState<number[]>([]) // 指定数组类型



export {}