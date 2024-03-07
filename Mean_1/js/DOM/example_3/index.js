
// const parentElement = document.getElementById("parent");
// const buttonElement = document.getElementById("button");

// get content
// console.log(parentElement.innerHTML);

// set content
// buttonElement.onclick = () => {
//     parentElement.innerHTML = "<h1> Welcome To Js </h1>";
//     console.log(parentElement.innerHTML);
// }




// ============================================================

// const parentElement = document.getElementById("parent");
// const buttonElement = document.getElementById("button");

// // get content
// console.log(parentElement.innerText);

// // set content
// buttonElement.addEventListener("click", function() {
//     parentElement.innerText = "<h1> Welcome To Js </h1>";
// });




// ============================================================
const parentElement = document.getElementById("parent");
const buttonElement = document.getElementById("button");

// get content
console.log(parentElement.textContent);

// set content
buttonElement.addEventListener("click", function() {
    parentElement.textContent = "<h1> Welcome To Js </h1>";
});

// ============================================================
