//ARRAY METHODS.

//FOR EACH
// arr = [1, 2, 3, 4, 5];

// function print(el) {
//     console.log(el);
// }

// arr.forEach(print);
// //OR
// arr.forEach(function(el) {
//     console.log(el);
// });

// let student =  [
//     {
//         name: "shifa",
//         marks: 76,
//     }, 
//     {
//         name: "zoya",
//         marks: 78,
//     }, 
//     {
//         name: "fareen",
//         marks: 82,
//     }];

//     let gpa = student.map((el) => {
//         return el.marks/10;
//     });
//     console.log(gpa);

//     arr.forEach((student) => {
//         console.log(student.name);
//     });

//MAP FUNCTION
// let num =  [1, 2, 3, 4];
// let double = num.map((el) => {
//     return el * 2;
// });
// console.log(double);

//FILTER FUNC
// let num = [2, 4, 1, 5, 6, 7, 2, 8, 9, 12, 55, 6 ];
// let even = num.filter( (num) => (num%2 == 0) );
// console.log(even);

//EVERY FUNC
// let sum = [2, 4, 6].every((el) => el%2 == 0);
// console.log(sum);

//SOME FUNC
// let sum = [2, 4, 7, 9, 6].some((el) => el%2 == 0);
// console.log(sum);

//REDUCE FUNC (returns sum of arr)
// let result = [3, 4, 7, 9, 6].reduce((res, el) => (res + el));
// console.log(result);

// REDUCE FUNC (returns max of arr)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 3];
// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let result = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });
// console.log(result);

//PRAC Q.1 CHECK IF ALL NUMBERS IN OUR ARRAY ARE MULTIPLES OF 10 OR NOT.
// let arr = [10, 20, 30, 40, 50];
// let sum = arr.every((el) => el % 10 == 0);
// console.log(sum);

//PRAC Q.2 FUNC TO FIND THE MIN NUMBER IN AN ARRAY
// let arr = [1, 2, 3, 4, 5, 6, 0, -7];
// function getMin(arr) {
//     let result = arr.reduce((min, el) => {
//         if(min < el) {
//             return min;
//         } else {
//             return el;
//         }
//     });
//     return result;
// }
// console.log(getMin(arr));

//SPREAD
// console.log(..."shifashaikh");
// let data = {
//     email: "shifastudyit@gmail.com",
//     pw: "abcd",
// };
// let dataCopy = {...data, id: 123};

//REST
// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }
// console.log(sum(1, 3, 5, 8));

//DESTRUCTING
// let names = ["shifa", "zoya", "fareen", "aqsa", "mansi", "sania", "fatima", "samiksha"];
// let [winner, runnerup, ...others] = names; 
// console.log(others); //array of all names except first two.

//DESTRUCTING (object)
// const student = {
//     name: "shifa",
//     age: 19,
//     class: 14,
//     subjects: ["adv java", "python", "sql", "javaScript"],
//     username: "shifantastic",
//     password: "abcd"
// };
// let { username: user, password: secret, city = "default" } = student;
// console.log(user);
// console.log(secret);