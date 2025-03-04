//ACTIVITY (generating facts on the webpage)
let btn1 = document.querySelector("#btn1");
let url = "https://catfact.ninja/fact";

btn1.addEventListener("click", async () => {
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result1");
    p.innerText = fact;
});

async function getFacts() {
    try {
        let res = await axios.get(url);  //using await keyword bcoz fetch is asynchronous.
        return res.data.fact;

    } catch(err) {
        console.log("error: ", err);
        return "No fact found";
    }
}

