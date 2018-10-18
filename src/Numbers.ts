/**
 * 89.498.491.651.651.651.681.681.681
 * Tám mươi chín ngàn (nghìn)
 * Bốn trăm chín mươi tám
 *
 * 681
 * Sáu
 * trăm
 * tám
 * mươi mốt (một)
 *
 * nghìn
 * triệu
 * tỉ
 *
 * 6
 * Sáu
 * 60
 * Sáu mươi
 * 600
 * Sáu trăm
 * 6.000
 * Sáu ngàn
 * 60.000
 * Sáu mươi ngàn
 * 60.001
 * Sáu mươi ngàn không trăm lẻ một
 * 600.000
 * Sáu trăm ngàn
 * 6.000.000
 * Sáu triệu
 *
 * 5
 * Năm
 * 32
 * Ba mươi hai
 * 15
 * Mười lăm
 * 21
 * Hai mươi mốt
 * 001
 * Không trăm lẻ một
 * 068
 * Không trăm sáu mươi tám
 * 162
 * Một trăm sáu mươi hai
 * 601
 * Sáu trăm lẻ một
 * 155
 * Một trăm năm mươi lăm
 * 600
 * Sáu trăm
 * 610
 * Sáu trăm mười
 * 001 (first group)
 * một
 * 021 (first group)
 * Hai mốt
 */

type NumberMap = { [key:string]: string }

const numberMap: NumberMap = {
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
