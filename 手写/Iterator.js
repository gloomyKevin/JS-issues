function createIterator(items) {
    var i = 0
    return {
        next: function () {
            var done = i >= items.length
            var value = !done ? items[i++] : undefined

            return {
                done: done,
                value: value
            }
        }
    }
}