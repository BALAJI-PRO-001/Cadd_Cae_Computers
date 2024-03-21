export class UserInterFace {

  setIcon(imgElement, oldImgPath, newImgPath) {
    if (imgElement) {
      throw new Error("Given img element is null ...");
    } else {
      if (imgElement.src.match(oldImgPath)) {
        imgElement.src = newImgPath;
      } else {
        imgElement.src = oldImgPath;
      }
    }
  }

}