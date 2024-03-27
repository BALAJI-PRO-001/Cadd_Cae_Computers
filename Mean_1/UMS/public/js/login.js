import UserInterFace from "./modules/UserInterFace.js";
import CommonFunction from "./modules/CommonFunction.js";
import Validator from "./modules/Validator.js";

const ui = new UserInterFace();
const commonFunction = new CommonFunction();
const validator = new Validator();

const loginForm = document.forms[0];
const imgElement = loginForm.querySelector(".eye-icon");
const inputElements = loginForm.querySelectorAll("input");
const rememberMeCheckBox = loginForm.querySelector("#checkbox");


/* reset form */
commonFunction.resetForm(loginForm);


imgElement.addEventListener("click", () => {
  ui.setIcon(
    imgElement,
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[1], "password", "text");
});


for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "email") {
      validator.isvalidEmail(inputElement);
    }

    if (inputElement.name == "password") {
      validator.isvalidPassword(inputElement);
    }
  });
}





loginForm.querySelector("button").addEventListener("click", (event) => {
  let booleans = [];
  for (let inputElement of inputElements) {
    if (inputElement.name == "email") 
      booleans.push(validator.isvalidEmail(inputElement));
    if (inputElement.name == "password") 
      booleans.push(validator.isvalidPassword(inputElement));
  }

  if (rememberMeCheckBox.checked && commonFunction.isTrue(booleans)) {
    console.log("work");
  }


  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  else event.stopPropagation();
});