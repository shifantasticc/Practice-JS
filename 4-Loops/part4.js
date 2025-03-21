// //PRINTING ODD NUMBERS USING LOOPS
// console.log("odd numbers.");
// for(let i=1; i<= 15; i=i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i=15; i>= 1; i=i-2){
//     console.log(i);
// }

// //PRINTING EVEN NUMBERS USING LOOPS
// console.log("even numbers.");
// for(let i=2; i<= 16; i=i+2){
//     console.log(i);
// }

// console.log("Backwards");

// for(let i=16; i>= 2; i=i-2){
//     console.log(i);
// }

// //PRINT MULTIPLICATION TABLE
// let n = prompt("Enter a number.");
// n = parseInt(n);
// console.log(`printing table of ${n}`);

// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// //NESTED LOOPS
// for(let i=1; i<=3; i++){
//     for(let j=3; j>=1; j--){
//         console.log(j);
//     }
//     console.log(" ");
// }

// //GUESS MY FAV MOVIE 
// const favMovie = "interstellar";
// let guess = prompt("guess my fav movie name.");

// while((guess != favMovie)&&(guess != 'quit')){
//     guess = prompt("wrong guess. please try again");
// }

// if(guess == favMovie){
//     console.log("congrats!!");
// }else{
//     console.log("quit.");
// }

// //LOOPS WITH ARRAYS
// let fruits = ["mango", "banana", "apple", "litchi", "kiwi"];

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// //PRINTING ARRAY IN REVERSE
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i, fruits[i]);
// }

// //PRINTING NESTED ARRAYS
// //#1
// let names = [
//     ["Shifa","Sumo","Sana"],
//     ["Farheen","Noorin","Rozain"]
// ]

// for(let i=0; i<names.length; i++){
//     console.log(i, names[i], names[i].length);
//     for(j=0; j<names[i].length; j++){
//         console.log(`j=${j}, ${names[i][j]}`);
//     }
// }

// //#2
// let student = [["Shifa", 76], ["Zoya", 78], ["Fareen", 80]];

// for(let i=0; i<student.length; i++){
//     console.log(`info of student #${i+1}`);
//     for(let j=0; j<student[i].length; j++){
//         console.log(student[i][j]);
//     }
// }

// //FOR OF LOOPS
// let fruits = ["mango", "banana", "apple", "litchi", "kiwi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "SHIFA SHAIKH"){
//     console.log(char);
// }

// //NESTED FOR OF LOOPS
// // #1
// let names = [
//         ["Shifa","Sumo","Sana"],
//         ["Farheen","Noorin","Rozain"]
//     ];

//     for(list of names){
//         for(name of list){
//             console.log(name);
//         }
//     }

// // #2
// let student = [["Shifa", 76], ["Zoya", 78], ["Fareen", 80]];

// for(list of student){
//     for(name of list){
//         console.log(name);
//     }
// }

// //Q.1 DELETE ALL OCCURRENCES OF 'NUM' IN GIVEN ARRAY
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// //Q.2 FIND THE NO. OF DIGITS IN A NUMBER.
// let number=287152;
// let count=0;

// let copy=number;

// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

// //Q.3 FIND THE SUM OF DIGITS IN A NUMBER.
// let number=287152;
// let sum=0;

// let copy=number;

// while(copy>0){
//     digit= copy % 10;
//     sum+= digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);

// //Q.4 PRINT THE FACTORIAL OF A NUMBER N.
// let n = 3;
// let fact = 1;

// for(let i=1; i<=n; i++){
//     fact *= i;
// }
// console.log(`factorial of ${n} is ${fact}`);

// //Q.5 FIND THE LARGEST NUMBER IN AN ARRAY WITH ONLY +VE NUMBERS.
// let arr = [2, 5, 10, 4, 2, 7, 1, 9];
// let largest = 0;

// for(let i=0; i<=arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
// }
// console.log(largest);
// 
