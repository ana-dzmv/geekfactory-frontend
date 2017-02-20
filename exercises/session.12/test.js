var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function greeter(person) {
    console.log(person.getInfo());
}
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getInfo = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
// var person: IPerson = {
//     firstName: 'Anastasia',
//     lastName: 'Blabla'
// };
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, grade) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.grade = grade;
        return _this;
    }
    // if you don't specify something is private, by default it's going to be public
    Student.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + ". I am in grade " + this.grade;
    };
    return Student;
}(Person));
var person = new Student('Anastasia', 'Blabla', 10);
greeter(person);
// console.log(greeter(person) + "!"); 
