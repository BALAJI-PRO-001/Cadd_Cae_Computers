import UserInterFace from "./UserInterFace.js";
import CommonFunction from "./CommonFunction.js";

const ui = new UserInterFace();
const commonFunction = new CommonFunction();

export default class Validator {

  NUMERIC_CHARACTER_REGEX_PATTERN = /\d/;
  SPECIAL_CHARACTER_REGEX_PATTERN = /[^a-zA-Z0-9\s]/;
  EMAIL_PASSWORD_REGEX_PATTERN = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  UPPERCASE_REGEX_PATTERN = /[A-Z]/;

  isvalidName(inputElement) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Name cannot be empty . . . .");
        return false;
      }
      
      if (this.NUMERIC_CHARACTER_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Name cannot contain numeric characters . . . .");
        return false;
      }

      if (this.SPECIAL_CHARACTER_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Name cannot contain special characters . . . .");
        return false;
      }

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;
      
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
        ui.setMessage(errorElement, "Email cannot be empty . . . .");
        return false;
      } 

      if (!this.EMAIL_PASSWORD_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Invalid email address. Please enter a valid email . . . . .");
        return false;
      }

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

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
        ui.setMessage(errorElement, "Password cannot be empty . . . .");
        return false;
      } 

      if (!this.UPPERCASE_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Password must contain at least one uppercase letter . . . .");
        return false;
      }
      
      if (!this.NUMERIC_CHARACTER_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Password must contain at least one numeric character . . . .");
        return false;
      }

      if (!this.SPECIAL_CHARACTER_REGEX_PATTERN.test(value)) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Password must contain at least one special character . . . .");
        return false;
      }

      if (value.length < 8) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Password must be 8 characters or longer . . . .");
        return false;
      }

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

    } else {
      throw new Error("Given element is null ...");
    }
  }


  isvalidConfirmPassword(inputElement, password) {
    if (inputElement) {
      const value = inputElement.value.trim();
      const errorElement = commonFunction.getSibling(inputElement, "p");

      if (value == "") {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Confirm Password cannot be empty . . . .");
        return false;
      } 

      if (value != password) {
        ui.setBorder(inputElement, ui.BORDER_1PX_RED);
        ui.setMessage(errorElement, "Password and Confirm Password do not match . . . . ");
        return false;
      }

      ui.setBorder(inputElement, ui.BORDER_1PX_TRANSPARENT);
      ui.setMessage(errorElement, "");
      return true;

    } else {
      throw new Error("Given element is null ...");
    }
  }

}