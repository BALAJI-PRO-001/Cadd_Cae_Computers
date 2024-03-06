
// DOM Methods

// document.write("Sample Text");
// document.write("Sample Text");

// ============================================================
// document.writeln("Sample Text");
// document.writeln("Sample Text");


// ============================================================


/*  HTML CODE 
    ---------
    <h1 id="heading-element">Sample Text</h1>
    <button id="button">Change Content</button> 
*/


// const headingElement = document.getElementById("heading-element");
// const buttonElement = document.getElementById("button");

// buttonElement.onclick = changeContent;

// function changeContent() {
//     headingElement.innerHTML = "Cadd Cae computers";
// }

// ============================================================



// ============================================================

/*  HTML CODE 
    ---------
    <h1 id="heading">Content - 1</h1>
    <h1 id="heading">Content - 2</h1>
*/


// const headingElement = document.getElementById("heading");
// console.log(headingElement);

// ============================================================




// ============================================================

/*  HTML CODE 
    ---------
    <h1 class="heading">Sample Text</h1>
    <h2 class="heading">Sample Text</h2>
    <h3 class="heading">Sample Text</h3>
    <h4 class="heading">Sample Text</h4>
    <h5 class="heading">Sample Text</h5>

    <button class="button">Change Content</button>
*/



// const headingElements = document.getElementsByClassName("heading");
// const buttonElement = document.getElementsByClassName("button")[0];

// buttonElement.onclick = changeContent;

// function changeContent() {
//     for (let headingElement of headingElements) {
//         headingElement.innerHTML = "Cadd Cae Computers";
//     }
// }

// ============================================================




// ============================================================

/*  HTML CODE 
    ---------
    <h1>Sample Text</h1>
    <h1>Sample Text</h1>
    <h1>Sample Text</h1>
    <h1>Sample Text</h1>
    <h1>Sample Text</h1>

    <button>Change Content</button>
*/

// const headingElements = document.getElementsByTagName("h1");
// const buttonElement = document.getElementsByTagName("button")[0];

// buttonElement.addEventListener("click", () => {
//     for (let headingElement of headingElements) {
//         headingElement.innerHTML = "Cadd Cae Computers";
//     }
// });

// ============================================================



// ============================================================

/*  HTML CODE 
    ---------
    <h1 id="heading">Sample Text</h1>
    <button id="button">Change Content</button>
*/

// const headingElement = document.querySelector("#heading");
// const buttonElement = document.querySelector("#button");

// buttonElement.addEventListener("click", changeContent);

// function changeContent() {
//     headingElement.innerHTML = "Cadd Cae Computers";
// }

// ============================================================




// ============================================================
const headingElements = document.querySelectorAll(".heading");

function changeContent() {
    for (let i = 0; i < headingElements.length; i++) {
        headingElements[i].innerHTML = "Cadd Cae Computers";
    }
}