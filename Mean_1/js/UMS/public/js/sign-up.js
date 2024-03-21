import { UserInterFace } from "./modules/UserInterface.js";
const ui = new UserInterFace();

const signupForm = document.forms[0];
const imgElements = signupForm.querySelectorAll(".eye-icon");


imgElements[0].addEventListener("click", (event) => {
  ui.setIcon(
   event.target, 
    "../../public/images/icons/eye-close-icon.png", 
    "../../public/images/icons/eye-open-icon.png"
  );
});