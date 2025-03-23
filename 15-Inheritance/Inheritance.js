// INHERITANCE
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi! i'm ${this.name}`);
    }
} 

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); //Parent constructor is called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); //Parent constructor is called
        this.subject = subject;
    }
}

let s1 = new Student("Violet", 21, 95);
s1.talk();
console.log(`my name: ${s1.name}, age: ${s1.age}, marks: ${s1.marks}.`);
console.log(" ");

let t1 = new Student("Lilith", 32, "Maths");
t1.talk();
console.log(`my name: ${t1.name}, age: ${t1.age}, subject: ${t1.subject}.`);
