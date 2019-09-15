var express = require('express')

//1.创建 app
var app = express()


//开放静态资源，第一个参数 '/public/' 请求的静态资源以 /public/ 开头 第二个参数 './public/test' 这个目录里面的具体文件名称。
app.use('/public/', express.static('./public/test'))
    // app.use(express.static('./public/'))

app.get('/', function(req, res) {
    // res.end('hello world')
    res.send('you see see one day day')
})

app.get('/login', function(req, res) {
    // res.end('hello world')
    res.send('login page')
})

app.listen(3000, function() {
    console.log('express app is running ~')
})