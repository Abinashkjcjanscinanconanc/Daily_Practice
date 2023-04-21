var Person1 = /** @class */ (function () {
    function Person1(n) {
        this.age = 30;
        this.name = n;
    }
    Person1.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person1;
}());
var user2;
user2 = new Person1('Max');
user2.greet('Hi there - I am');
console.log(user2);
