export default class CommonFunction {

  getSibling(element, siblingElementName) {
    if (element) {
      return element.parentElement.querySelector(siblingElementName);
    } else {
      throw new Error("Given element is null ...");
    }
  }

  isTrue(booleans) {    
    for (let boolean of booleans) {
      if (!boolean) return false;
    }
    return true;
  }
  
}