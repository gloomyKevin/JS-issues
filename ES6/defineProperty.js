var obj = {}, value = null
Object.defineProperty(obj, "num", {
    get: function () {
        console.log('执行get操作');
        return value
    },

    set: function (newValue) {
        console.log('执行set操作');
        value: newValue
    }
})

obj.num = 1
console.log(obj.num);

// 继续封装
function Archiver() {
    var value = null;
    var archive = []

    Object.defineProperty(this, 'num', {
        get: function () {
            console.log('执行get操作');
            return value
        },

        set: function (value) {
            console.log('执行set操作');
            value: value
            archive.push({ val: value })
        }
    });
    this.getArchive = function () { return archive }
}

var obj = {
    value: 1
}

// 储存 obj.value 的值
var value = 1

Object.defineProperty(obj, "value", {
    get: function () {
        return value
    },

    set: function (newValue) {
        value = newValue
        document.getElementById("container").innerHTML = newValue
    }
})

document.getElementById('button').addEventListener("click", function () {
    obj.value += 1;
});

// watch函数
(function () {
    var root = this
    function watch(obj, name, func) {
        var value = obj[name]

        Object.defineProperty(obj, name, {
            get: function () {
                return value
            },

            set: function (newValue) {
                value = newValue
                func(value)
            }
        })

        if (value) obj[name] = value
    }
    this.watch = watch
})()

    // 使用proxy重写watch
    (function () {
        var root = this
        function watch(target, func) {
            var proxy = new Proxy(target, {
                get: function (target, prop) {
                    return target[prop]
                },

                set: function (target, prop, value) {
                    target[prop] = value
                    func(prop, value)
                }
            })
            return proxy
        }
        this.watch = watch
    })()

var obj = {
    value: 1
}

