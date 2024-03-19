

//========================================================================

/* 
      HTML code
      ---------
      <label>Select your item : </label>
      <select id="select">
        <option>Select Item</option>
      </select> 
      <br><br>
      <label>Add new item : </label>
      <input type="text" id="input">
      <br><br>
      <button id="add-new-button">Create New Item</button> 
*/

// const inputElement = document.getElementById("input");
// const button = document.getElementById("add-new-button");
// const selectElement = document.getElementById("select");


// button.addEventListener("click", () => {
//   if (inputElement.value.trim() == "") {
//     window.alert("Value cannot be empty ....");
//   } else {
//     const option = document.createElement("option");
//     option.innerHTML = inputElement.value;
//     selectElement.append(option);
//     inputElement.value = "";
//   }
// });



// const inputElement = document.getElementById("input");
// const button = document.getElementById("add-new-button");
// const selectElement = document.getElementById("select");


// button.addEventListener("click", () => {
//   if (inputElement.value.trim() == "") {
//     window.alert("Value cannot be empty ....");
//   } else {
//     const option = document.createElement("option");
//     option.innerHTML = inputElement.value;
//     selectElement.prepend(option);
//     inputElement.value = "";
//   }
// });
//========================================================================




//========================================================================

/* 
    HTML code
    ---------

    <div id="parent">
        <h1>Child 1</h1>
        <h2>Child 2</h2>
        <h3>Child 3</h3>
    </div>
    <button id="button">Add New Child</button>

*/

// const parent = document.getElementById("parent");
// const button = document.getElementById("button");
// const child2 = parent.children[1];

// button.onclick = () => {
//   const newElement = document.createElement("h4");
//   newElement.innerHTML = "Iam New Child";
//   child2.before(newElement);
// }



// const parent = document.getElementById("parent");
// const button = document.getElementById("button");
// const child2 = parent.children[1];

// button.onclick = () => {
//   const newElement = document.createElement("h4");
//   newElement.innerHTML = "Iam New Child";
//   child2.after(newElement);
// }


// const parent = document.getElementById("parent");
// const button = document.getElementById("button");

// button.onclick = () => {
//   const newElement = document.createElement("h4");
//   newElement.innerHTML = "Iam New Child";
//   // parent.insertAdjacentElement("beforebegin", newElement);
//   // parent.insertAdjacentElement("afterbegin", newElement);
//   // parent.insertAdjacentElement("beforeend", newElement);
//   parent.insertAdjacentElement("afterend", newElement);
//   parent.insertAdjacentHTML("afterend", "<h1> Hello </h1>")
// }


//========================================================================
// const parent = document.getElementById("parent");
// const button = document.getElementById("button");

// button.addEventListener("click", function() {
//   for (let child of parent.children) {
//     child.remove();
//   }
// });
//========================================================================



const parent = document.getElementById("parent");
const button = document.getElementById("button");

button.onclick = () => {
  parent.removeChild(parent.children[0]);
}