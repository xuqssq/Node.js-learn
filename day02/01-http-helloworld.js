var http = require('http')
var fs = require('fs')
    // 1.创建 Server
var server = http.createServer()
    // 2.监听 Server 的 request 请求事件，设置请求处理函数
    // 请求
    //    处理
    //  响应
    //  一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
    //  没有请求就没有响应。
server.on('request', function(req, res) {
        // console.log(req.url)
        var wwwDir = '../www'
        var url = req.url
        if (url === '/') {
            fs.readFile(wwwDir + '/index.html', function(err, data) {
                // if (err) {
                //     res.end('404 Not Found.')
                // } else{
                // }
                if (err) {
                    // return 有两个作用：
                    // 1.方法返回值
                    // 2.阻止代码继续往后执行
                    return res.end('404 Not Found.')
                }
                res.end(data)

            })
        } else if (url === '/test1') {
            fs.readFile(wwwDir + '/test1.txt', function(err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)

            })
        } else if (url === '/test2') {
            fs.readFile(wwwDir + '/test2.txt', function(err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)

            })
        } else {
            res.end('404 Not Found  ~~~ .')
        }
    })
    // 3.绑定端口号，启动服务
server.listen(3000, function() {
    console.log('running ~ ~')
})