class Person {
    constructor(name="Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, i'm ${this.name} Whats up!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()) {
            description += ` His major is ${this.major}`;
        }

        return description;
    }
}

const fakhri = new Student("fakhri", 25, "Computer Science");
const anon = new Student();
console.log(anon.getDescription());
console.log(fakhri.getDescription());
