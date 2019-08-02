var http = require('http')

var server = http.createServer()
server.on('request', function(req, res) {
    //在服务端默认发送的数据，其实是 utf8 编码的内容
    //但是浏览器不知道你是 utf8 编码内容
    //浏览器在不知道服务器响应内容的编码的情况下会按照当前操作系统的默认编码去解析
    //中文操作系统默认编码是 gdk
    //解决方法就是正确的告诉浏览器我给你发送的内容是什么编码的
    //在 http 协议中，'Content-type',就是用来告诉对方我给你发送的数据内容是什么类型

    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('你好，世界')

    var url = req.url
    if (url === '/plain') {
        //text/plain就是普通文本
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('你好，世界')
    } else if (url === '/html') {
        //如果你发送的是html格式的字符串，也要告诉浏览器发送的是html格式的
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>你好,html<h1>')
    }




})
server.listen(3000, function() {
    console.log('Server is running...')
})