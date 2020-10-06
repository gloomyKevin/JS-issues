// class语法
class Person {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        return 'Hello, i am ' + this.name
    }
}

var kevin = new Person('Kevin')
kevin.sayHello()

// ES5语法
function Person() {
    this.name = name
}

Person.prototype.sayHello = function () {
    return 'Hello, i am ' + this.name
}

var kevin = new Person('Kevin')
kevin.sayHello()