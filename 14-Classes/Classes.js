// OOPs
// FACTORY FUNCTION 
// function personMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hii, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = personMaker("mark", 19);
// let p2 = personMaker("jessie", 20);
// console.log(p1);
// console.log(p2);
// p1.talk();
// p2.talk();

//CONSTRUCTORS - doesn't return anything & start with capital letter.
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// };

// Person.prototype.talk = function () {
//     console.log(`Hi! my name is ${this.name}`);
// };

// let p1 = new Person("mark", 19);
// let p2 = new Person("jessie", 20);

// CLASSES - can create constructor & function within it.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi! my name is ${this.name}`);
//     };
// };

// let p1 = new Person("mark", 19);
// let p2 = new Person("jessie", 20);

