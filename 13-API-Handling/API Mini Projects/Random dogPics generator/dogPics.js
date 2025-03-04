//ACTIVITY (generating dog image on webpage)
let btn2 = document.querySelector("#btn2");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn2.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);  //using await keyword bcoz fetch is asynchronous.
        return res.data.message;

    } catch(err) {
        console.log("error: ", err);
        return "/";
    }
}