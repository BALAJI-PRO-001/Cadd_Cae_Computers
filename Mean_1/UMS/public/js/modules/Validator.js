import UserInterFace from "./UserInterFace.js";
import CommonFunction from "./CommonFunction.js";

const ui = new UserInterFace();
const commonFunction = new CommonFunction();

export default class Validator {

  isvalidName(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        errorElement.innerHTML = "Name is empty ....";
        return false;
      } else {
        ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
        errorElement.innerHTML = "";
        return true;
      }
    }
    else {
      throw new Error("Given element is null ...");
    }
  }



  isvalidEmail(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        errorElement.innerHTML = "Email is empty ....";
        return false;
      } else {
        ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
        errorElement.innerHTML = "";
        return true;
      }
    } else {
      throw new Error("Given element is null ...");
    }
  }


  isvalidPassword(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        errorElement.innerHTML = "Password is empty ....";
        return false;
      } else {
        ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
        errorElement.innerHTML = "";
        return true;
      }
    } else {
      throw new Error("Given element is null ...");
    }
  }


  isvalidConfirmPassword(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        errorElement.innerHTML = "Confirm Password is empty ....";
        return false;
      } else {
        ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
        errorElement.innerHTML = "";
        return true;
      }
    } else {
      throw new Error("Given element is null ...");
    }
  }


}