import axios from "../axios";

function getName() {
  return axios.get('/api/more/name')
}

function getAge() {
  return axios.get('/api/more/age')
}


axios.all([getName(), getAge()])
  .then(axios.spread((resName, resAge) => {
    console.log(resName.data)
    console.log(resAge.data)
  }))

axios.all([getName(), getAge()])
  .then(([resName, resAge]) => {
    console.log(resName.data)
    console.log(resAge.data)
  })

// getUri
const fakeConfig = {
  baseURL: 'https://www.baidu.com',
  url: '/user/12345',
  params: {
    idClient: 1000,
    idTest: 2000,
    testString: 'this IS Test'
  }
}

console.log(axios.getUri(fakeConfig))