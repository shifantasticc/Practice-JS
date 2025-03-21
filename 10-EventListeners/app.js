// let btns = document.querySelectorAll("button");
// console.dir(btns);

// for (btn of btns) {
//     btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a button.");
//     }
// }

// function sayHello() {
//     alert("Hello");
// }

//EVENT LISTENER.
// let parah = document.querySelector("p");

// parah.addEventListener("click", function () {
//     console.log("the parah was clicked");
// });

// let box = document.querySelector("div");

// box.addEventListener("mouseenter", function () {
//     console.log("mouse inside box");
// });

//THIS IN EVENT LISTENER.
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "green";
// });

//THIS FOR MUTIPLE ELEMENTS
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "green";
// }

// btn.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

//KEYBOARD EVENTS
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//     console.log("key is pressed");
// });

// inp.addEventListener("keyup", function () {
//     console.log("key is released");
// });

//EVENT KEYBOARD EVENTS
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("key =", event.key);
//     console.log("code =", event.code);
//         console.log("key is pressed");
//     });

//FORN EVENTS
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("Form submitted");
// });

//EXTRACTING FORM DATA
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = this.elements[0]; //form.elements[0]
//     let pass = this.elements[1];
    
//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

//Change & Input EVENT

//CHANGE: tracks intial and final change not the minor ones.
//INPUT: tracks all the change in event except non-character keys.
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("change event")
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function () {
//     console.log("input event")
//     console.log("final value = ", this.value);
// });

// //ACTIVITY
// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input",function () {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });

//Q.1
// let btn = document.querySelector("button");
// let inp = document.querySelector("#text");

// btn.addEventListener("mouseout", function () {
//     console.log("Mouse is out");
// });

// inp.addEventListener("keypress", function () {
//     console.log("key is pressed");
// });

// inp.addEventListener("scroll", function () {
//     console.log("scrolled");  ////??????
// });

// inp.addEventListener("load", function () {
//     console.log("load");   //////??????
// });

//Q.2
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     this.style.backgroundColor = "green";
// });

// //Q.3 NOT RIGHT!
// let inp = document.querySelector("#text");
// let h2 = document.querySelector("h2");

// inp.addEventListener("input", function () {
//     if(inp.value == (/^[A-Za-z]+$/)) {
//         console.log(inp.value);
//         h2.innerText = inp.value;
//     } else {
//         console.log("invalid character");
//         console.log(inp.value);
//         h2.innerText = inp.value;
//     }
// });
