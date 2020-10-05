// // 第一版
// function objectFactory() {

//     // 新建一个对象obj
//     var obj = Object.create(null)

//     // 取出第一个参数作为传入的构造函数, arguments被去除第一个参数
//     Constructor = [].shift.call(arguments)

//     // 将obj的原型指向构造函数, 这样obj可以访问到构造函数中原型的属性
//     obj.__proto__ = Constructor.prototype

//     // 使用appply将构造函数的this指向新建的对象, 此时obj可以访问到构造函数的属性
//     Constructor.apply(obj, arguments)

//     return obj
// }

function objectFactory() {
    var obj = Object.create(null)

    Constructor = [].shift.call(arguments)

    obj.__proto__ = Constructor.prototype

    var ret = Constructor.apply(obj, arguments)

    return typeof ret === 'object' ? ret : obj
}

// 返回值效果实现
