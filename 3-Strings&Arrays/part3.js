// let msg = " hello ";
// msg.trim(); //trims space only from front n back

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass); //string is immutable

// let str = "Shifa Shaikh";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let str = "Zoya Shaikh";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// let msg = "ilovecoding";
// msg.indexOf("love"); //1
// msg.indexOf("Love"); //-1 (means not found)
// msg.indexOf("o"); //2
// msg.indexOf("z"); //-1

// METHOD CHAINING
// let msg = "   hello";
// // let newMsg = msg.trim();
// // console.log("after trim: ", newMSg); //hello
// // newMsg = newMsg.toUpperCase();
// // console.log("after uppercase: ", newMSg); //HELLO

// //INSTEAD CHAIN METHODS!!!!!
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg); //HELLO

// SLICE!!
// let str ="ILoveCoding";
// console.log(str.slice(1,5));
// console.log(str.slice(-3)); //msglength-3  11-3  ing

//REPLACE REPEAT
// let msg = "ILoveCoding";
// console.log(msg.replace("Love","Do")); //IDoCoding
// console.log(msg.repeat(2)); //ILoveCodingILoveCoding

//JS-3 Qno.1
// let arr =[7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans);

//JS-3 Qno.1
// let arr =[7,9,0,-2];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

//JS-3 Qno.3
// let str = prompt("enter a string");

// if(str.length == 0){
//     console.log("given string is blank")
// }else{
//     console.log("string is not blank.")
// }

// //JS-3 Qno.4
// let str = "shifashaikh";
// let idx = 3;

// if(str[idx] == str[idx].toLowerCase){
//     console.log("char is lowercase.");
// }
// else{
//     console.log("char is not lowercase.");
// }

// //JS-3 Qno.5
// let str = prompt("please enter a string.");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//JS-3 Qno.6
// let arr = ["hello",'h','1','2','55','88'];
// let item = 55;

// if(arr.indexOf(item) != 1){
//     console.log("element exists in array.");
// }
// else{
//     console.log("element does not exists in array.");
// }
// 