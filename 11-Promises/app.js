//VISUALIZING THE CALL STACK
// function one() {     
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

//JS IS SINGLE THREADED
/*Multi threading func like setTimeout 
works because of browsers. As JS is a single
threaded lang while browser is written in C++/Java
that stops the func as per the timeout in it!! */

//Callback HEll = CAllback Nesting
// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange(); //callback
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("pink", 1000, () => {
//                 changeColor("purple", 1000, );
//             });
//         });
//     });
// });

//PROMISES in // Callback HELL EXAMPLE
// function savetoDb(data, success, failure) { 
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "apna college", 
//     () => {
//         console.log("success: your data was saved");
//         savetoDb(
//             "Hello World", 
//             () => {
//                 console.log("success2: your data2 was saved");
//                 savetoDb(
//                     "Shifa Shaikh", 
//                     () => {
//                         console.log("success: your data was saved");
//                     },
//                     () => {
//                         console.log("failure: weak connection.");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2: weak connection.");
//             }
//         );
//     },
//     () => {
//         console.log("failure: weak connection. data not saved.");
//     }
// );

// //IMPLEMENTING PROMISE OBJECT
// function savetoDb(data) { 
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) +1;
//         if (internetSpeed > 4) {
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }

//STRUCTURE of Promise Function
// savetoDb("Shifa Shaikh")
//     .then(() => {
//         console.log("promise was resolved ");
//         console.log(request);
//     }) 
//     .catch(() => {
//         console.log("promise was rejected ");
//         console.log(request);
//     });

//Promise CHAINING
// savetoDb("Shifa Shaikh")
//     .then(() => {
//         console.log("Data1 saved");
//         return savetoDb("Hello")
//     })
//     .then(() => {
//         console.log("Data2 saved");
//         return savetoDb("Bye");
//     })
//     .then(() => {
//         console.log("Data3 saved");
//     })
//     .catch(() => {
//         console.log("promise1 was rejected ");
//     });

//ARGUMENTS IN Promise Chaining
    // savetoDb("Shifa Shaikh")
    // .then((result) => {
    //     console.log("Data1 saved");
    //     console.log("result of promise:", result);
    //     return savetoDb("Hello")
    // })
    // .then((result) => {
    //     console.log("Data2 saved");
    //     console.log("result of promise:", result);
    //     return savetoDb("Bye");
    // })
    // .then((result) => {
    //     console.log("Data3 saved");
    //     console.log("result of promise:", result);
    // })
    // .catch((error) => {
    //     console.log("promise1 was rejected ");
    //     console.log("result of error:", error);
    // });

//RE-WRITING COLOR FUNC WITH PROMISE.
let h1 = document.querySelector("h1");
function changeColor(color, delay) {
   return new Promise((resolve, reject) => {
    setTimeout(() => {
        h1.style.color = color;
        resolve("Color Changed!");
    }, delay);
   });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color changed");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color changed");
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color changed");
    return changeColor("pink", 1000);
})
.then(() => {
    console.log("pink color changed");
    return changeColor("purple", 1000);
})
.then(() => {
    console.log("purple color changed");
    return changeColor("black", 1000);
})
.then(() => {
    console.log("black color changed");
});