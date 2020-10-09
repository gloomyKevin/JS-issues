function myPromise(callback) {
    var _this = this
    _this.value = viod 0
    var onResolvedCallbacks
    var onRejectedCallbacks
    _this.resolve = function (value) {
        onResolvedCallbacks
    }
    _this.reject = function (error) {
        onRejectedCallbacks
    }
    callback(_this.resolve, _this.reject)
}
myPromise.prototype.then = function (resolve, reject) { }

// 链式存储
function MyPromise(callback) {
    var _this = this
    _this.value = void 0
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []
    _this.resolve = function (value) {
        setTimeout(() => {
            _this.onResolvedCallbacks.foreach(cb => cb())
        })
    }
    _this.reject = function (error) {
        setTimeout(() => {
            _.onRejectedCallbacks.foreach(cb => cb())
        })
    }
    callback(_this.resolve, _this.reject)
}

MyPromise.prototype.then = function () { }

// 添加状态机制
const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
function MyPromise(callback) {
    var _this = this
    _this.currentState = PENDING
    _this.value = void 0
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []
    _this.resolve = function (value) {
        if (value instanceof MyPromise) {
            return value.then(_this.resolve, _this.reject)
        }
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = FULFILLED
                _this.value = value
                _this.onResolvedCallbacks.foreach(cb => cb())
            }
        })
    }
    _this.rejected = function (error) {
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = REJECTED
                _this.value = value
                _this.onRejectedCallbacks.foreach(cb => cb())
            }
        })
    }
}