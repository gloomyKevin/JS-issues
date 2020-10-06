function SuperType(name) {
    this.colors = ["red", "blue", "green"]
    this.name = name
}

SuperType.prototype.sayName = function () {
    return this.name
}

function SubType(name, subName) {
    SuperType.call(this, name)
    this.subName = subName
}

SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SubType
let instance = new SubType('Carl', "kevin")