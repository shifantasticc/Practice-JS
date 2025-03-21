//
// BASIC FUNC IN JS
// function hello() {
//     console.log("hello");
// }

// hello();/

//PRAC Q.2 CREATE A FUNC TO ROLL A DICE AND DISPLAY IT.
// function rollDice() {
//     let value = Math.floor(Math.random()*6) +1;
//     console.log(value);
// }

// rollDice();

//FUNC WITH ARGS
// function addNum(num1, num2) {
//     console.log(`${num1} + ${num2} = ${num1 +num2}`);
// }
// addNum(5,10);
// addNum(45,9);
// addNum(22, 46);

//PRAC Q.3 GIVES AVERAGE OF 3 NUM
// function calAvg(num1, num2, num3) {
//         console.log(`The average of 3 numbers are: ${(num1+num2+num3)/3}`);
//     }
//     calAvg(15,10,30);

//PRAC Q.4 PRINT A MULTIPLICATION TABLE OF A NUMBER.
// function printTable(num) {
//     for(let i=1; i<=10; i++) {
//         console.log(`${num} * ${i} = ${i*num}`);
//     }
// }
// printTable(14);

//RETURN FUNC
// function isAdult(age) {
//     if(age >= 18) {
//         return "Adult";
//     }else{
//         return "Not Adult";
//     }
// }
// console.log(isAdult(22));
// console.log(isAdult(14));

//PRAC Q.5 RETURN SUM OF NUM FROM 1 TO N.
// function getSum(n){
//     let sum = 0;
//     for(let i=0; i<=n; i++){
//         sum += i;
//     }
//     console.log(`The sum of ${n} numbers are: ${sum}`);
// }
// getSum(6);

//PRAC Q.6 RETURNS THE CONCAT OF ALL STRINGSIN AN ARRAY.
// let str = ["Hello", "I", "am", "Shifa", "Shaikh"];

// function concat(str) {
//     let result = "";

//     for(let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     console.log(result);
// }
// concat(str);

//PRAC Q.7 WHAT WILL BE THE OUTPUT?
// let greet = "hello"; //GLOBAL SCOPE

// function changeGreet() {
//     let greet = "namaste"; //FUNC SCOPE
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet); //LEXICAL SCOPE
//     }
//     innerGreet();
// }
// console.log(greet); // 1ST
// changeGreet(); // 2ND

//HIGH ORDER FUNC!!
// function multiGreet(func, n) { //higher order func
//     for(let i=1; i<=n; i++){
//         func();
//     }
// }
// let greet = function() {
//     console.log("hello");
// }
// multiGreet(greet, 3);

//HIGHER ORDER FUNCTION THAT RETURN A FUNCTION!!
// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = prompt("EVEN OR ODD NUMBER??");
// let n = prompt("enter a no. to check.");
// let func = oddEvenTest(request);
// func(n);

//METHODS!!
// const calculator = {
//     num: 55,
//     add: function(num1, num2) {
//         return num1 + num2;
//     },
//     sub: function(num1, num2) {
//         return num1 - num2;
//     },
//     mul: function(num1, num2) {
//         return num1 * num2;
//     }
// };

// let result = calculator.add(1,2);
// console.log(result);

// //METHODS SHORTHAND!!
// const calculator2 = {
//     add(a,b) {
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     }
// };

//Q.1 RETURNS ARRAY ELEMENTS LARGER THAN A NUMBER.
// let arr = [2, 5, 66, 99, 201, 4, 7, 3 ];
// let num = 10;

// function getElements(arr, num) {
//     for(let i=0; i< arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
// }
// getElements(arr, num);


//Q.2 EXTRACT UNIQUE CHARACTERS FROM STRING.
// let str = "gxydgxydxwyxytxsxvwtdfggeshaaahygx";

// function getUnique(str) {
//     let ans = "";
//     for(let i = 0; i < str.length; i++) {
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1) {
//             ans += currChar;
//         }
//     }
//     console.log(ans);
// }
// getUnique(str);

//Q.3 ACCEPTS A LIST OF COUNTRY NAMES AS INPUT AND RETURNS THE LONGEST COUNTRY NAME AS OUTPUT.
// let country = ["Australia", "Germany", "United States of America"];

// function longestName(country) {
//     let ansIndx = 0;
//     for(let i=0; i < country.length; i++) {
//         let ansLen = country[ansIndx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen) {
//             ansIndx = i;
//         }
//     }
//     console.log(country[ansIndx]);
// }
// longestName(country);

//Q.4 COUNT THE NUMBER OF VOWELS IN STRING ARGUMENT.
// let mainStr = prompt("Enter a word to count Vowels in it.");

// function countVowels(str) {
//     let count = 0;
//     for(let i = 0; i < str.length; i++) {
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u"
//         ) {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels(mainStr);

//Q.5 GENERATE A RANDOM NUMBER WITHIN A RANGE (START,END).

// let start = prompt("enter starting number:");
// let end = prompt("enter ending number:");
// let startNum = parseInt(start);
// let endNum = parseInt(end);

// function generateRandom(startN, endN) {
//     let diff = (endN-(startN-1));
//     let result = Math.floor(Math.random()*diff) +startN;
//     console.log(result);
// }
// generateRandom(startNum, endNum);
