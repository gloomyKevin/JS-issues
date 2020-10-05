// function forOf(obj, cb) {
//     let iterator, result

//     if (typeof obj[Symbol.iterator] !== "function")
//         throw new TypeError(result + "is not iterator")
//     if (typeof cb !== "function")
//         throw new TypeError("cb must be callable")

//     iterable = obj[Symbol.iterator]()

//     result = iterator.next()
//     while (!result.done) {
//         cb(result.value)
//         result = iterator.next()
//     }
// }

function forOf(obj, cb) {
    let result, iterator

    if (typeof obj[Symbol.iterator] !== 'function')
        throw new TypeError(result + "is not iterator")
    if (typeof cb !== 'function')
        throw new TypeError("cb must be callable")

    iterable = obj[Symbol.iterator]()

    // 注意,iterable能直接访问的方法只有next(), value和done需要通过iterator的对象访问
    result = iterator.next()
    while (!result.done) {
        cb(result.value)
        result = iterable.next()
    }
}