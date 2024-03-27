import UserInterFace from "./modules/UserInterFace.js";
import Validator from "./modules/Validator.js";
import CommonFunction from "./modules/CommonFunction.js";

const ui = new UserInterFace();
const validator = new Validator();
const commonFunction = new CommonFunction();

const signupForm = document.forms[0];
const imgElements = signupForm.querySelectorAll(".eye-icon");
const inputElements = signupForm.querySelectorAll("input");

/* reset form */
commonFunction.resetForm(signupForm);


imgElements[0].addEventListener("click", () => {
  ui.setIcon(
    imgElements[0], 
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[2], "password", "text");
});
     

imgElements[1].addEventListener("click", () => {
  ui.setIcon(
    imgElements[1],
    "/public/images/icons/eye-close-icon.png", 
    "/public/images/icons/eye-open-icon.png"
  );
  commonFunction.setType(inputElements[3], "password", "text");
});



for (let inputElement of inputElements) {
  inputElement.addEventListener("blur", () => {
    if (inputElement.name == "name") {
      validator.isvalidName(inputElement);
    }
    else if (inputElement.name == "email") {
      validator.isvalidEmail(inputElement);
    }
    else if (inputElement.name == "password") {
      validator.isvalidPassword(inputElement);
    }
    else if (inputElement.name == "confirmPassword") {
      validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim());
    }
  });
}



// submit event handler
signupForm.querySelector("button").addEventListener("click", (event) => {
  let booleans = [];
  for (let inputElement of inputElements) {
    if (inputElement.name == "name") 
      booleans.push(validator.isvalidName(inputElement));
    else if (inputElement.name == "email") 
      booleans.push(validator.isvalidEmail(inputElement));
    else if (inputElement.name == "password") 
      booleans.push(validator.isvalidPassword(inputElement));
    else if (inputElement.name == "confirmPassword") 
      booleans.push(validator.isvalidConfirmPassword(inputElement, inputElements[2].value.trim()));
  }

  if (!commonFunction.isTrue(booleans)) event.preventDefault();
  event.stopPropagation();

});

