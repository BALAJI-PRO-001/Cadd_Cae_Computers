// const container = document.getElementById("container");
// console.log(container.hasChildNodes());
// console.log(container.childElementCount != 0);
// console.log(container.children.length != 0);
//============================================================


//============================================================
// const container = document.getElementById("container");
// console.log("Element Name : ", container.nodeName);
// console.log("Type Element : ", container.nodeType);
// console.log("Type Text : ", container.childNodes[0].nodeType);
// console.log("Type Comment : ", container.childNodes[1].nodeType);
//============================================================




//============================================================
// const container = document.getElementById("container");
// const button = document.getElementById("button");

// button.innerHTML = "Add New Child";

// button.addEventListener("click", () => {
//   const p = createElement("p");
//   setContent(p, "Iam New Child");
//   container.append(p);
// });


// function createElement(elementName) {
//   return document.createElement(elementName);
// }

// function setContent(element, content) {
//   element.innerHTML = content;
// }
//============================================================



//============================================================
// const container = document.getElementById("container");
// const button = document.getElementById("button");

// button.innerHTML = "Create Comment";

// const createComment = (comment) => {
//   return document.createComment(comment);
// }

// const commentNode = createComment("This is comment by Js");
// const p = document.createElement("p");
// p.innerHTML = "Comment is added";

// button.onclick = () => {
//   container.appendChild(p);
//   container.append(commentNode);
// }
//============================================================





//============================================================
// const container = document.getElementById("container");
// const button = document.getElementById("button");

// button.innerHTML = "Create Text Node";

// const addTextNode = function() {
//   const textNode = document.createTextNode("This is Text by Js");
//   container.append(textNode);
// }

// button.addEventListener("click", addTextNode);
//============================================================




//============================================================
// const container = document.getElementById("container");
// const button = document.getElementById("button");
// button.innerHTML = "Create New Attribute";

// button.addEventListener("click", function() {
//   const classAttribute = document.createAttribute("class");
//   container.setAttributeNode(classAttribute);
//   container.className = "add-style";
// });
//============================================================

