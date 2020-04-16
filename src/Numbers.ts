import { getNumberFromMap } from './Utils'

/**
 * A group of three numbers, a component in the input number to read
 */
export default class Numbers {
  protected first = ''
  protected second = ''
  protected last = ''

  constructor(s: string) {
    if (s.length > 0) {
      this.last = s[s.length - 1]
    }

    if (s.length > 1) {
      this.second = s[s.length - 2]
    }

    if (s.length > 2) {
      this.first = s[s.length - 3]
    }
  }

  /**
   * If the current {@link Numbers} is the first and before a {@link Billion} number, "nghìn" will be suffixed.
   * @param s the current string of the {@link Numbers}
   * @param firstNumber indicate that this is the first {@link Numbers}
   * @param beforeBillion indicate that this {@link Numbers} is before a {@link Billion} number
   * @return the string after suffixing "nghìn".
   */
  private static suffixFirstAndBeforeBillion(
    s: string,
    firstNumber?: boolean,
    beforeBillion?: boolean
  ): string {
    if (firstNumber && beforeBillion) {
      s += ' nghìn'
    }
    return s
  }

  /**
   * Read three digits of {@link Numbers}
   * @param firstNumber indicate that this is the first {@link Numbers} or not
   * @param beforeBillion indicate that this group number stands before a {@link Billion} group or not
   * @return the number in string in Vietnamese way
   */
  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    let s = ''

    if (this.isThreeZero()) {
      if (firstNumber) {
        return 'không'
      }
      return ''
    }

    s = this.readFirstNumber(s)
    if (!this.isLastTwoZero()) {
      s = this.readSecondNumber(s)
      s = this.readLastNumber(s)
    }

    s = Numbers.suffixFirstAndBeforeBillion(s, firstNumber, beforeBillion)

    return s.trim()
  }

  /**
   * Indicate that whether the last two digits ({@link second) and {@link last}} of the {@link Numbers} are zero or not
   */
  private isLastTwoZero(): boolean {
    return this.second === '0' && this.last === '0'
  }

  /**
   * Indicate that whether all three digits of the {@link Numbers} are zero or not
   */
  private isThreeZero(): boolean {
    return this.first === '0' && this.second === '0' && this.last === '0'
  }

  /**
   * Read the first number of three digits of the {@link Numbers}
   * @param s the input number in string after read second number
   * @return the result after adding last number
   */
  private readLastNumber(s: string): string {
    if (this.second) {
      s = this.readLastAfterSecond(s)
    } else {
      s += ` ${getNumberFromMap(this.last)}`
    }
    return s
  }

  /**
   * Read the last number when second number is existed
   * @param s the number to read
   * @return the last number in string
   */
  private readLastAfterSecond(s: string): string {
    if (this.last === '1' && this.second !== '0' && this.second !== '1') {
      s += ' mốt'
    } else if (this.last === '5') {
      s += ' lăm'
    } else if (this.last !== '0') {
      s += ` ${getNumberFromMap(this.last)}`
    }
    return s
  }

  /**
   * Read the second number of three digits of the {@link Numbers}
   * @param s the input number in string after read first number
   * @return the result after adding second number
   */
  private readSecondNumber(s: string): string {
    if (this.second === '0') {
      s += ' lẻ'
    } else if (this.second === '1') {
      s += ' mười'
    } else if (this.second) {
      s += ` ${getNumberFromMap(this.second)} mươi`
    }
    return s
  }

  /**
   * Read the last number of three digits of the {@link Numbers}
   * @param s the input number in string
   * @return the result after adding first number
   */
  private readFirstNumber(s: string): string {
    if (this.first) {
      s = `${getNumberFromMap(this.first)} trăm`
    }
    return s
  }
}
