var fs = require('fs')
    // Promise 是一个构造函数


// 使用：

// 1.创建 Promise 容器，给别人一个承诺。

//  Promise 容器一旦被创建，就开始执行里面的代码。

var p1 = new Promise(function(resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function(err, data) {
        if (err) {
            // console.log(err)
            reject(err)
        } else {
            // console.log(data)
            resolve(data)
        }
    })
})

var p2 = new Promise(function(resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function(err, data) {
        if (err) {
            // console.log(err)
            reject(err)
        } else {
            // console.log(data)
            resolve(data)
        }
    })
})

var p3 = new Promise(function(resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function(err, data) {
        if (err) {
            // console.log(err)
            reject(err)
        } else {
            // console.log(data)
            resolve(data)
        }
    })
})

// then 方法接收的 function 就是容器中的 resolve 函数

p1.then(function(data) {
    console.log(data)
    return p2
}, function(err) {
    console.log('读取文件失败~', err)
}).then(function(data) {
    console.log(data)
    return p3
}, function(err) {
    console.log('读取文件失败~', err)
}).then(function(data) {
    console.log(data)
}, function(err) {
    console.log('读取文件失败~', err)
})