export class Person {
    role: string;
    constructor(public name: string) {
        this.name = name;
    }

    getRole(): string {
        return this.role;
    }

    getInfo(): string {
        return `My name is ${this.name}. I am a ${this.role}.`
    }
}

export class Student extends Person{
    constructor(public name: string){
        super(name);
        this.role = 'Student';
    }

}


export class Staff extends Person{
    constructor(public name: string){
        super(name);
        this.role = 'Staff';
    }
}

export class Teacher extends Staff{
    constructor(public name: string, public subject: string){
        super(name);
        this.subject = subject;
    }

    getInfo(): string{
        return `${super.getInfo()} I teach ${this.subject}.`;
    }
}