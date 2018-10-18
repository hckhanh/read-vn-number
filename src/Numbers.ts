const numberMap = {
  "0": "không",
  "1": "một",
  "2": "hai",
  "3": "ba",
  "4": "bốn",
  "5": "năm",
  "6": "sáu",
  "7": "bảy",
  "8": "tám",
  "9": "chín"
};

/**
 * A group three numbers, a component in the input number
 */
export default class Numbers {
  protected first: string = '';
  protected second: string = '';
  protected last: string = '';

  constructor(s: string) {
    if (s.length > 0) {
      this.last = s[s.length - 1];
      if (s.length > 1) {
        this.second = s[s.length - 2];
        if (s.length > 2) {
          this.first = s[s.length - 3];
        }
      }
    }
  }

  /**
   * Read three digits of group number
   * @param firstNumber indicate that this is the first group number or not
   * @param beforeBillion indicate that this group number stands before a {@link Billion} group or not
   * @return the number in string in Vietnamese way
   */
  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    let s: string = "";

    if (this.first === "0" && this.second === "0" && this.last === "0") {
      if (firstNumber) {
        return "không";
      } else if (beforeBillion) {
        return "tỉ";
      } else {
        return "";
      }
    }

    if (this.first) {
      if (!firstNumber || this.first !== "0") {
        s = `${numberMap[this.first]} trăm`;
      }
    }

    if (this.second !== "0" || this.last !== "0") {
      if (this.second) {
        if (!firstNumber || this.second !== "0" || this.first !== "0") {
          if (this.second === "0") {
            s += " lẻ";
          } else if (this.second === "1") {
            s += " mười";
          } else {
            s += ` ${numberMap[this.second]} mươi`;
          }
        }
      }

      if (this.last && (this.second !== "1" || this.last !== "0")) {
        if (this.second) {
          if (this.last === "1" && this.second !== "0" && this.second !== "1") {
            s += " mốt";
          } else if (this.last === "5") {
            s += " lăm";
          } else if (this.last !== "0") {
            s += ` ${numberMap[this.last]}`;
          }
        } else {
          s += ` ${numberMap[this.last]}`;
        }
      }
    }

    if (firstNumber && beforeBillion) {
      s += " nghìn tỉ";
    }

    return s.trim();
  }
}
