//0.安装
//1.引包

var express = require('express')

//2.创建你服务器应用程序
//   也就是原来的 http.createServer

var app = express()

//在 Express 中开放资源就是一个 API 的事
// 公开指定的目录
app.use('/public/', express.static('./public/'))
app.use('/static/', express.static('./static/'))
    // 当服务器收到 get 请求 / 的时候，执行回调函数
app.get('/', function(req, res) {
    res.send('hello express!')
})
app.get('/about', function(req, res) {
        res.send('about~你好！')
    })
    // 以前：
    // 得到路径
    // 一个一个判断
    // 显得非常不优雅

// 相当于 server.listen 
app.listen(3000, function() {
    console.log('app is running at port 3000。')
})