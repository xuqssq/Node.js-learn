var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var comments = [{
        name: '木槿',
        message: '今天天气不错！',
        dateTime: '2019-08-14'
    },
    {
        name: '木槿2',
        message: '今天天气不错！',
        dateTime: '2019-08-14'
    },
    {
        name: '木槿3',
        message: '今天天气不错！',
        dateTime: '2019-08-14'
    },
    {
        name: '木槿4',
        message: '今天天气不错！',
        dateTime: '2019-08-14'
    },
    {
        name: '木槿5',
        message: '今天天气不错！',
        dateTime: '2019-08-14'
    }
]
app.engine('html', require('express-art-template'));
// 配置使用 art-template 模板引擎
// 第一个参数表示，当渲染以 .art 结尾的文件时，使用 art-template 模板引擎
// express-art-template 是专门用来在 Express 中把 art-template 整合到 Express中的
// 虽然这里不需要加载 art-template 但也必须安装，因为 express-art-template 依赖了 art-template

// 如果想修改默认的 views 目录：
// app.set('views','render函数的默认路径')

//配置 body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public/', express.static('./public'))

app.get('/', function(req, res) {
    res.render('index.html', {
        comments: comments
    })
})
app.get('/post', function(req, res) {
    res.render('post.html')
})
app.post('/post', function(req, res) {
        // console.log('success')
        // 1.获取表单 POST 数据
        // 2.处理
        // 3.发送响应
        // console.log(req.body)
        var comment = req.body
        comment.dateTime = '2019-09-13'
        comments.unshift(comment)
        res.redirect('/')
    })
    // app.get('/pinglun', function(req, res) {
    //     // console.log(req.query)
    //     var comment = req.query
    //     comment.dateTime = '2019-09-13'
    //     comments.unshift(comment)
    //         // res.statusCode = 302
    //         // res.setHeader('Location', '/')
    //         // res.end()
    //     res.redirect('/')

// })
app.listen(3000, function() {
    console.log('running~')
})