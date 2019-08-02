    //获取机器信息
    var os = require('os')
        //操作路径
    var path = require('path')
        //获取当前机器的 cpu 信息
    console.log(os.cpus())
        //memory 内存
    console.log(os.totalmem())
        //extname extension name
    console.log(path.extname('c:/a/b/c/d/hello.txt'))