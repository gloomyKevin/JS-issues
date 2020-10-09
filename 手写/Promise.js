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
    callback(_this.resolve, _this.reject)
}

MyPromise.prototype.then = function () { }

const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"
var MyPromise = function (callback) {
    var _this = this
    _this.currentState = PENDING
    _this.value = void 0
    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []
    _this.resolve = function (value) {
        if (value instanceof MyPromise) {
            return _this.then(_this.resolve, _this.reject)
        }
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = RESOLVED
                _this.value = value
                _this.onResolvedCallbacks.foreach(cb => cb())
            }
        })
    }

    _this.reject = function (value) {
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = REJECTED
                _this.value = value
                _this.onRejectedCallbacks.foreach(cb => cb())
            }
        })
    }
    callback(_this.resolve, _this.reject)
}

MyPromise.prototype.then = function () { }

// 异常处理
const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"
function MyPromise(callback) {
    _this = this
    _this.currentState = PENDING
    _this.value = void 0
    _this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    _this.resolve = function (value) {
        if (value instanceof MyPromise) {
            return _this.value.then(_this.resolve, _this.reject)
        }
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = RESOLVED
                _this.value = value
                _this.onResolvedCallbacks.foreach(cb => cb())
            }
        })
    }

    _this.reject = function (value) {
        setTimeout(() => {
            _this.currentState = REJECTED
            _this.value = value
            _this.onRejectedCallbacks.foreach(cb => cb())
        })
    }

    try {
        callback(_this.resolve, _this.reject)
    } catch (e) {
        _this.reject(e)
    }
}

MyPromise.prototype.then = function () { }

// then的实现
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var _this = this
    var promise2

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }

    if (_this.currentState === RESOLVED) {
        return promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
    if (_this.currentState === RESOLVED) {
        return promise2 = new myPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var x = onRejected(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
    if (_this.currentState === REJECTED) {
        return promise2 = new myPromise(function (resolve, reject) {
            _this.onResolvedCallbacks.push(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
            _this.onRejectedCallbacks.push(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
}

// catch的实现
MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
}

// 无缝调用
function resolutionProcedure(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError(""))
    }

    if (x instanceof MyPromise) {
        if (x.currentState === PENDING) {
            x.then(function (value) {
                resolutionProcedure(promise2, value, resolve, reject)
            }, reject)
        } else {
            x.then(resolve, reject)
        }
        return
    }
}

let called = false
if (a !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
        let then = x.then
        if (typeof then === 'function') {
            then.call(
                x,
                y => {
                    if (called) return
                    called = true
                    return resolutionProcedure(promise2, y, resolve, reject)
                }
            )
        }
    }
}

MyPromise.prototype.then = function () {
    var _this = this
    var promise2

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof rejected === 'function' ? onFulfilled : error => { throw error }

    if (_this.currentState === FULFILLED) {
        return promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    var _this = this
    var promise2

    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : (error) => { throw error }

    if (_this.currentState === FULFILLED) {
        return promise2 = new myPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    if (_this.currentState === REJECTED) {
        return promise2 = new MyPromise(function (resolve, reject) {
            setTimeout(function () {
                try {
                    var x = onRejected(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    if (_this.currentState === PENDING) {
        return promise2 = new MyPromise(function (resolve, reject) {
            _this.onResolvedCallbacks.push(function () {
                try {
                    var x = onFulfilled(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                    resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
            _this.onRejectedCallbacks.push(function () {
                try {
                    var x = onRejected(_this.value)
                    if (x instanceof MyPromise) {
                        x.then(resolve, reject)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        })
    }
}

const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"
function MyPromise(callback) {
    var _this = this
    _this.currentState = PENDING
    _this.value = void 0

    _this.onResolvedCallbacks = []
    _this.onRejectedCallbacks = []

    _this.resolve = function () {
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = FULFILLED
                _this.value = value
                _this.onResolvedCallbacks.foreach(cb => cb())
            }
        })
    }

    _this.reject = function () {
        if (value instanceof MyPromise) {
            value.then(resolve, reject)
        }
        setTimeout(() => {
            if (_this.currentState === PENDING) {
                _this.currentState = RESOLVED
                _this.value = value
                _this.onRejectedCallbacks.foreach(cb => cb())
            }
        })
    }
}
