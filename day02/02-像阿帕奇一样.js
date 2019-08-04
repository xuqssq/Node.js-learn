var http = require('http')
var fs = require('fs')
    // 1.创建 Server
var server = http.createServer()
var wwwDir = '../www'
    // 2.监听 Server 的 request 请求事件，设置请求处理函数
    // 请求
    //    处理
    //  响应
    //  一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
    //  没有请求就没有响应。
server.on('request', function(req, res) {
        // console.log(req.url)
        var url = req.url

        var filePath = '/index.html'
        if (url !== '/') {
            filePath = url
        }
        // console.log(filePath, wwwDir + filePath)
        fs.readFile(wwwDir + filePath, function(err, data) {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.end(data)
        })

    })
    // 3.绑定端口号，启动服务
server.listen(3000, function() {
    console.log('running ~ ~')
})