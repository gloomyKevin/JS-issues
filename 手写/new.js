// 第一版
function objectFactory() {

    var obj = Object.create(null)

    Constructor = [].shift.call(arguments)

    obj.__proto__ = Constructor.prototype

    Constructor.apply(obj, arguments)

    return obj
}