
export default class LocalStorage {

  setItem(key, value) {
    if (key && value) {
      localStorage.setItem(key, value);
    } else {
      throw new Error("Given Key or value is empty ...");
    }
  }

  

}