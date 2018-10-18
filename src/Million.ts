import Numbers from "./Numbers";

/**
 * A group three numbers, a component in million position of the input number
 */
export default class MillionNumber extends Numbers {
  constructor(s: string) {
    super(s);
  }

  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    if (this.first !== "0" || this.second !== "0" || this.last !== "0") {
      return `${super.read(firstNumber)} triệu`;
    } else {
      return "";
    }
  }
}
