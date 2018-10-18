import Billion from './Billion'
import Million from './Million'
import Numbers from './Numbers'
import Thousand from './Thousand'

/**
 * A number reader like Vietnamese way helper
 */
export default class NumberReader {
  /**
   * Read a number in Vietnamese
   * @param number the number to read
   * @return a string in vietnamese way
   */
  public static read(number: string | number): string {
    let s: string = ''
    const numberGroups: string[] = []

    if (typeof number === 'number') {
      s = number.toString()
    } else if (typeof number === 'string') {
      s = number
    }

    const nGroup = Math.floor(s.length / 3)

    for (let i = 0; i < nGroup; i++) {
      numberGroups.unshift(s.substr(s.length - 3 - i * 3, 3))
    }

    if (s.length % 3 !== 0) {
      numberGroups.unshift(s.substr(0, s.length % 3))
    }

    const numbers: Numbers[] = []

    for (let i = numberGroups.length - 1, currentType = 0; i >= 0; i--) {
      numbers.unshift(this.getNumber(numberGroups[i], currentType++))
      currentType %= 4
    }

    console.log(numbers)

    return numbers
      .reduce(function(result, group: Numbers, index: number) {
        let beforeBillion = false
        if (
          index + 1 < numbers.length &&
          numbers[index + 1] instanceof Billion
        ) {
          beforeBillion = true
        }
        return result + ' ' + group.read(index === 0, beforeBillion)
      }, '')
      .trim()
  }

  private static getNumber(s: string, type: number): Numbers {
    switch (type) {
      case 0:
        return new Numbers(s)
      case 1:
        return new Thousand(s)
      case 2:
        return new Million(s)
      case 3:
        return new Billion(s)
      default:
        return new Numbers('')
    }
  }
}
