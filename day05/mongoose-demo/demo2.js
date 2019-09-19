var mongoose = require('mongoose')

var Schema = mongoose.Schema
    // 1. 连接数据库
    // 指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 设计文档结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
    username: {
        type: String,
        required: true // 不能为空
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
})

//3.将文档结构发表为模型
//  mongoose.model 方法就是用来将一个架构发布为 model
//  第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//             mongoose 会自动将大写名词的字符串生成小写复数的集合名词
//             例如这里的 User 最终会变为 users 集合名称
//  第二个参数：架构 Schema
//   返回对象：模型构造函数
var User = mongoose.model('User', userSchema)



// 4.当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所欲为了（增删改查）

//  新增数据

// var admin = new User({
//     username: '莫子谦',
//     password: 'xuqian',
//     email: 'xq-ambition@admin.com'
// })

// admin.save(function(err, ret) {
//     if (err) {
//         console.log('保存失败~')
//     } else {
//         console.log('保存成功')
//             // console.log(ret)
//     }
// })


// 查询数据

// User.find(function(err, ret) {
//     if (err) {
//         console.log('查询失败~')
//     } else {
//         console.log(ret)
//     }
// })

// User.find({
//     username: '莫子谦' //条件
// }, function(err, ret) {
//     if (err) {
//         console.log('查询失败~')
//     } else {
//         console.log(ret)
//     }
// })


// User.findOne({ // 查询符合条件的一个
//     username: '莫子谦', //条件
//     password: 'xuqian'
// }, function(err, ret) {
//     if (err) {
//         console.log('查询失败~')
//     } else {
//         console.log(ret)
//     }
// })


//  删除数据
// User.remove({
//     username: '莫子谦'
// }, function(err, ret) {
//     if (err) {
//         console.log('删除失败~')
//     } else {
//         console.log('删除成功')
//         console.log(ret)
//     }
// })

// 更新数据
User.findByIdAndUpdate('5d83539e2167524ff85cae99', { //需要更改数据的id
    //需要更新的内容
    password: '9090909'
}, function(err, ret) {
    if (err) {
        console.log('更新数据失败~')
    } else {
        console.log('更新数据成功')
    }
})