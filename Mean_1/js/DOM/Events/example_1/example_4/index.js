
function fun1(event) {
  console.log(event);
}

const heading2 = document.getElementById("heading-2");

heading2.onclick = (event) => {
  console.log(event);
}


const heading3 = document.getElementById("heading-3");

heading3.addEventListener("click", (event) => {
  console.log(event);
});

