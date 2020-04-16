import Billion from './Billion'
import Million from './Million'
import Numbers from './Numbers'
import Thousand from './Thousand'

/**
 * A number reader in Vietnamese language helper
 */
export default class NumberReader {
  /**
   * Read a number in Vietnamese language
   * @param number the number to read
   * @return a string of the number is read in Vietnamese
   */
  public static read(number: string | number): string {
    const s = typeof number === 'number' ? number.toString() : number

    const numberGroups = this.getGroupNumbers(s)
    const numbers = this.mapToNumbers(numberGroups)
    return this.readNumbers(numbers)
  }

  /**
   * Convert all {@link Numbers} objects to a string
   * @param numbers an array of {@link Numbers} objects
   * @return a {@link string} of the number is read in Vietnamese
   */
  private static readNumbers(numbers: Numbers[]): string {
    return numbers
      .reduce(function (result, group: Numbers, index: number) {
        const beforeBillion =
          index + 1 < numbers.length && numbers[index + 1] instanceof Billion
        return result.trim() + ' ' + group.read(index === 0, beforeBillion)
      }, '')
      .trim()
  }

  /**
   * Map all group numbers in {@link string} to {@link Numbers} objects
   * @param numberGroups group of numbers in string
   * @return an array of {@link Numbers}
   */
  private static mapToNumbers(numberGroups: string[]): Numbers[] {
    const numbers: Numbers[] = []

    for (let i = numberGroups.length - 1, currentType = 0; i >= 0; i--) {
      numbers.unshift(this.getNumber(numberGroups[i], currentType++))
      currentType = currentType === 4 ? 1 : currentType
    }
    return numbers
  }

  /**
   * Generate a group of numbers from a string of number
   * @param s input string of number
   */
  private static getGroupNumbers(s: string): string[] {
    const numberGroups: string[] = []
    const nGroup = Math.floor(s.length / 3)

    for (let i = 0; i < nGroup; i++) {
      numberGroups.unshift(s.substr(s.length - 3 - i * 3, 3))
    }

    if (s.length % 3 !== 0) {
      numberGroups.unshift(s.substr(0, s.length % 3))
    }
    return numberGroups
  }

  /**
   * Map a number in string to a {@link Numbers} object
   * @param s input string to map
   * @param type type number of the {@link Numbers} object
   */
  private static getNumber(s: string, type: number): Numbers {
    let number!: Numbers
    switch (type) {
      case 0:
        number = new Numbers(s)
        break
      case 1:
        number = new Thousand(s)
        break
      case 2:
        number = new Million(s)
        break
      case 3:
        number = new Billion(s)
        break
    }
    return number
  }
}
