//USING ASYNC FUNCTION (it returns promise)
// async function greet () {
//    throw "404 page not found";
//     return "hello";
// }
// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was", result);
//     })
//     .catch((err) => {
//         console.log("promise was rejected with error: ", err);
//     });

//USING AWAIT KEYWORD (wait*)
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) +1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }
// async function demo () {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

//RE-WRITING COLOR FUNC WITH ASYNC & AWAIT
// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//         resolve("Color Changed!");
//     }, delay);
//    });
// }
// async function demo() {
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("red", 1000);
//     await changeColor("purple", 1000);
// }
// demo();

//RE-WRITING COLOR FUNC FOR HANDLING REJECTIONS
// let h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//    return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let num = Math.floor(Math.random()*5) +1;
//         if (num > 3) {
//             reject("promise rejected");
//         }

//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//         resolve("Color Changed!");
//     }, delay);
//    });
// }

// async function demo() {
//     try {
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("red", 1000);
//         await changeColor("purple", 1000);
//     } catch(err) {
//         console.log("error caugth");
//         console.log(err);
//     }
//     let a = 5;
//     console.log(a);
//     console.log("new number is: ", a+3);
// }
// demo();