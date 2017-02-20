function greeter(person: Person): void {
    console.log(person.getInfo());
}

class Person {
    constructor(private firstName: String, private lastName: String){

    }

    getInfo(): String{
        return `${this.firstName} ${this.lastName}`
    }
}

interface IPerson {
    firstName: String;
    lastName: String;
}

// var person: IPerson = {
//     firstName: 'Anastasia',
//     lastName: 'Blabla'
// };


class Student extends Person{
    constructor (firstName: String, lastName: String, private grade: Number){
        super(firstName, lastName);
    }

    // if you don't specify something is private, by default it's going to be public
    getInfo(): String{
        return `${super.getInfo()}. I am in grade ${this.grade}`;
    }
}

var person = new Student('Anastasia', 'Blabla', 10);


greeter(person);

// console.log(greeter(person) + "!");