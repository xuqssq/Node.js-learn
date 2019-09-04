var foo = 'bar'

function add(x, y) {
    return x + y
}

// exports = add //打印出空对象，不行

// 如果一个模块需要直接导出某个成员，而非挂载的方式
// 那这个时候必须使用下面这种方式
// module.exports = add

// 你可以认为在每个模块的最好 return 了这个 exports

// 只能到我想要给你的成员
// 这样做的目的是为了解决变量命名冲突的问题
// exports.add = add

// exports 是一个对象
// 可以通过多次为这个对象添加成员实现对外导出多个内部成员

// exports.str = 'hello'


module.exports = {
    add: function() {
        return x + y
    },
    str: 'hello'
}

// 若希望加载得到直接就是一个：
// 方法
// 字符串
// 数字
// 数组