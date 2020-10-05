(function (global) {
    function Set(data) {
        this._values = []
        this.size = 0

        data && data.forEach(function (item) {
            this.add(item)
        }, this)
    }

    Set.prototype['add'] = function (add) {
        if (this._values.indexOf(value) == -1) {
            this._values.push(value)
            ++this.size
        }
        return this
    }
})(this)