const path = require('path')
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const multipart = require('connect-multiparty')
const app = express();
const port = 3000;
const router = express.Router();

require('./server2')

app.listen(port, () => {
  console.log('🚀 服务已启动');
});

// 定义接口
app.get('/', (req, res) => {
  res.send('hello world');
})

// 演示数据
const data = [
  {
    id: '1',
    title: '关山月',
    content: '明月出天山， 苍茫云海间'
  },
  {
    id: '2',
    title: '望岳',
    content: '会当凌绝顶，一览众山小'
  },
  {
    id: '3',
    title: '忆江南',
    content: '日出江花红胜火，春来江水绿如蓝'
  },
]
// 使用路由
// 定义响应JSON 数据的应用接口
// app.get('/posts', (req, res) => {
//   res.send(data)
// })

// app.use(express.static(__dirname, {
//   setHeaders(res) {
//     console.log(res);
//     res.cookie('XSRF-TOKEN-XN', 'good~night')
//   }
// }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(multipart({
  uploadDir: path.resolve(__dirname, 'upload-files')
}))

// simple1
router.get('/api/posts', (req, res) => {
  res.json(req.query)
})

// simple2
router.post('/api/posts', (req, res) => {
  res.json(req.body)
})

router.post('/api/posts/buffer', (req, res) => {
  let msg = []
  req.on('data', (chunk) => {
    if(chunk) {
      msg.push(chunk)
    }
  })
  req.on('end', () => {
    let buf = Buffer.concat(msg)
    res.json(buf.toJSON())
  })
})

// error
// 随机返回500状态码
router.get('/api/taking', (req, res) => {
  if(Math.random() > 0.5) {
    res.json(data)
  }else {
    res.status(500)
    res.end()
  }
})
// 模拟超时
router.get('/api/taking/timeout', (req, res) => {
  setTimeout(() => {
    res.json(data)
  }, 3000)
})

// extend接口
router.head('/api/extend/head', (req, res) => {
  res.end()
})
router.options('/api/extend/options', (req, res) => {
  res.end()
})
router.delete('/api/extend/delete', (req, res) => {
  res.end()
})
router.put('/api/posts', (req, res) => {
  res.json(req.body)
})

router.patch('/api/extend/patch', (req, res) => {
  res.json(req.body)
})

router.get('/api/extend/user', (req, res) => {
  res.json({
    code: 0,
    message: 'success',
    result: {
      name: '赤井秀一',
      age: 33
    }
  })
})

router.get('/api/interceptor/get', (req, res) => {
  res.end('good night~~')
})

router.post('/api/config/post', (req, res) => {
  res.json(req.body)
})

router.get('/api/cancel/get', (req, res) => {
  setTimeout(() => {
    res.json('good night')
  }, 1000)
})

router.post('/api/cancel/post', (req, res) => {
  setTimeout(() => {
    res.json(req.body)
  }, 1000)
})

//more
router.get('/api/more/withcredential/get', (req, res) => {
  res.json(req.cookies)
})

router.get('/api/more/get', (req,res) => {
  res.cookie('XSRF-TOKEN-XN', 'good-night~')
  res.json(req.cookies)
})

// 上传
router.post('/api/upload', (req, res) => {
  console.log(req.body, req.files);
  console.log(123);
  res.end('upload success!')
})

app.use(router)

// 定义带参数的接口
app.get('/posts/:id', (req, res) => {
  const { id } = req.params

  const resultList = data.filter(item => item.id === id)

  res.send(resultList[0])
})