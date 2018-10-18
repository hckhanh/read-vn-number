import Numbers from "./Numbers";

export default class Billion extends Numbers {
  constructor(s: string) {
    super(s);
  }

  /**
   * Read billion number
   * @param firstNumber
   * @param beforeBillion
   */
  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    if (this.first !== "0" || this.second !== "0" || this.last !== "0") {
      return `${super.read(firstNumber)} tỉ`;
    } else {
      return "";
    }
  }
}
