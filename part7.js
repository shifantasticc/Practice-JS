//THIS KEYWORD!!
// const student = {
//     name: "shifa",
//     age: 19,
//     eng: 84,
//     math: 75,
//     phy: 60,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(` ${this.name} 's average marks: ${avg}`);
//     }
// }

//TRY AND CATCH!!
// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch(err) {
//     console.log("caught and error!");
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");

//MISCELLANEOUS TOPICS!!

//arrow funtions!
// const sum = (a,b) => a + b;

// const cube = n => { return n*n*n; }

// const hello = () => {
//     return "hello world";
// }
// //Implicit return
// const mul = (a,b) => (
//     a * b
// );

//SET TIMEOUT!!
// console.log("hii there!"); //1
// setTimeout( () => {
//     console.log("I'm shifa Shaikh."); //3
// }, 3000);
// console.log("welcome."); //2

//SET INTERVAL!!
// let id1 = setInterval( () => {
//     console.log("I'm shifa Shaikh."); //3
// }, 2000 );
// clearInterval(id1); //to stop interval on console

//THIS IN ARROW FUNNCTION! (lexical scope for variables)
// const student = {
//     name: "shifa",
//     marks: 76,
//     prop: this, //global scope

//     getName: function () {
//         console.log(this);
//         return this.name;
//     },

//     getMarks: () => {
//         console.log(this); //parent scope -> window
//         return this.marks;
//     },

//     getInfo1: function() {
//         setTimeout( () => {
//             console.log(this); //student
//         }, 2000);
//     },

//     getInfo2: function() {
//         setTimeout( function() {
//             console.log(this); //window
//         }, 2000);
//     },
// };

//PRAC Q.1 ARROW FUNC THAT RETURNS SQUARE OF 'N'.
// let num1 = prompt("Enter a number.");
// let n = parseInt(num1);

// let result = (n) => {
//     console.log( `The square of ${n} is ${n*n}`);
// }
// result(n);

//PRAC Q.2 PRINT "HELLO WORLD" 5 TIMES AT 2s INTERVALS EACH.
// let id = setInterval( () => {
//     console.log("HELLO WORLD!");
// }, 2000);

// setTimeout( () => {
//     clearInterval(id);
//     console.log("clear interval ran.");
// },10000);

//Q.1 AN ARROW FUNC 'arrayAverage' THAT ACCEPTS ARRAY OF NUM AND RETURNS AVERGAGE OF IT.
// let arrayAvg = (arr) => {
//     let count = 0;
//     for(let number of arr) {
//         count += number;
//     }
//     console.log(count / arr.length);
// }
// let arr = [2, 5, 7, 8, 0, 3, 5, 6];
// console.log(arrayAvg(arr));

//Q.2 AN ARROW FUNC 'isEven()' THAT TAKES SINGLE NUM AS AGRS AND RETURNS IS IT'S EVEN OR NOT.
let num1 = prompt("Enter a number.");
let n = parseInt(num1);
let isEven = (n) => {
    if (n%2 == 0) {
        console.log(`${n} is an Even Number.`);
    } else {
        console.log(`${n} is an Odd Number.`);
    }
}
isEven(n);

//Q.3 WHAT IS THE OUTPUT OF THE FOLLOWING CODE.

// const object = {
//     message:'Hello,World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);


//Q.4 WHAT IS THE OUTPUT OF THE FOLLOWING CODE.
// let length = 6;
// function callback() {
//     console.log(this.length + "shifa");
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback);
