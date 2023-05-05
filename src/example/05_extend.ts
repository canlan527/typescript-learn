import axios from "../axios";

// axios({
//   url: '/api/posts',
//   method: 'post',
//   data: {
//     msg: 'hello~'
//   }
// })

// axios.request({
//   url: '/api/posts',
//   method: 'post',
//   data: {
//     msg: 'typescript'
//   }
// })

// axios.get('/api/posts').then(res => {
//   console.log(res)
// })

// axios.post('/api/posts')

// axios.put('/api/posts',{msg: '科学家灰原哀'})

// axios.head('/api/extend/head')

// axios.options('/api/extend/options')

// axios.delete('/api/extend/delete')

// axios.patch('/api/extend/patch', {msg: 'patch赤井秀一'})

// axios({
//   url: '/api/posts',
//   method: 'post',
//   data: {
//     msg: 'hello~'
//   }
// })

// axios('/api/posts', {
//   method: 'post',
//   data: {
//     msg: '秀哀一生推'
//   }
// })

// 泛型支持
interface ResponseData<T = any> {
  code: number;
  result: T;
  message: string;
}

interface User {
  name: string;
  age: number;
}

function getUser<T>() {
  return axios<ResponseData<T>>("/api/extend/user")
    .then((res) => res.data)
    .catch((e) => console.error(e));
}

async function test() {
  const user = await getUser<User>();
  if (user) {
    console.log(user.result.name);
  }
}

test();
