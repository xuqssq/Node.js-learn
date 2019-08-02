var file_system = require('fs')
    // 读取文件有2参数
    // 第一个参数是文件地址
    // 第二个参数是一个回调函数：
    // 成功：
    //     data是数据
    //     error是null
    // 失败：
    //     data是undefind
    //     error是错误对象

file_system.readFile('.data/doc.txt', function(error, data) {
    //<Buffer e5 ad a6 e4 b9 a0 6e 6f 64 65 2e 6a 73 e7 9a 84 e7 ac ac e4 b8 80 e5 a4 a9 e3 80 82>   储存的是二进制数据
    // 二进制转换为16进制了，所以看到的不是  0  1
    // 用tostring方法转换为我们可以阅读的字体
    console.log(data.toString())
})