//CONVERTING JSON DATA INTO JS OBJ
// let jsonRes = '{"fact":"Cats have 300 million neurons; dogs have about 160 million","length":58}';
  
// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);
// console.log(validRes.length);

//CONVERTING JS OBJ INTO JSON DATA
// let student = {
//     name: "shifa",
//     marks: 76,
// };
// let jsObj = JSON.stringify(student);
// console.log(jsObj); 

//TESTING API REQUESTS (hoppscoth & postman)
//HTTPS VERBS (get, post, delete)
//STATUS CODE (404-not found, 200-ok, 400-bad request)
//ADD INFO IN URLS (/search?q=harry+potter)
//HTTP HEADERS

//OUR FIRST API REQUEST
// let url = "https://catfact.ninja/fact";

// fetch(url)   //returns promise
// .then((res) => {
//     return res.json()  //gets readable data
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json()  //gets readable data
// })
// .then((data2) => {
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR: ", err);
// });

//USING FETCH WITH ASYNC AND AWAIT
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);  //using await keyword bcoz fetch is asynchronous.
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);  //using await keyword bcoz fetch is asynchronous.
//         let data2 = await res2.json();
//         console.log(data2.fact);

//     } catch(err) {
//         console.log("error: ", err);
//     }
//     console.log("bye");
// }

//AXIOS (re-writing above code into axios)

//ACTIVITY (generating facts on the webpage)
// let btn1 = document.querySelector("#btn1");
// let url = "https://catfact.ninja/fact";

// btn1.addEventListener("click", async () => {
//     let fact = await getFacts();
//     // console.log(fact);
//     let p = document.querySelector("#result1");
//     p.innerText = fact;
// });

// async function getFacts() {
//     try {
//         let res = await axios.get(url);  //using await keyword bcoz fetch is asynchronous.
//         return res.data.fact;

//     } catch(err) {
//         console.log("error: ", err);
//         return "No fact found";
//     }
// }

// //ACTIVITY (generating dog image on webpage)
// let btn2 = document.querySelector("#btn2");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn2.addEventListener("click", async () => {
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);  //using await keyword bcoz fetch is asynchronous.
//         return res.data.message;

//     } catch(err) {
//         console.log("error: ", err);
//         return "/";
//     }
// }

//SENDING HEADERS
// const url = "https://icanhazdadjoke.com/";
// async function getJokes() {
//     try {
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data.joke);
//     } catch (e) {
//         console.log(e);
//     }
// }


