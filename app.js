console.log("Hello World!\n==========\n");
let submit = document.getElementById("submit").addEventListener("click", submitGif);
let gif = document.getElementById("gif");
let gifSearch = document.getElementById("gifSearch");
let myAPI = "xI6LldZOzx0ajFU3O2PWACaRFc0xgT0M"; 

function submitGif() {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${myAPI}&s=${gifSearch.value}`, {
    mode: "cors",
})
.then(function (response) {
    console.log(response);
    return response.json();
})
.then(function (response) {
    console.log(response);
    return (gif.src = response.data.images.original.url);
})
.catch(function (reject) {
    console.log(reject);
})
};

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
