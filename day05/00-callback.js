function f1(x, y, callback) {
    setTimeout(function() {
        var ret = x + y
        callback(ret)
    }, 2000)
}
f1(10, 10, function(ret) {
    console.log(ret)
})