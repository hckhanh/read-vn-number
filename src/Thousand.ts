import Numbers from './Numbers'

/**
 * A group three numbers, a component in thousand position of the input number
 */
export default class Thousand extends Numbers {
  constructor(s: string) {
    super(s)
  }

  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    if (this.first !== '0' || this.second !== '0' || this.last !== '0') {
      return `${super.read(firstNumber)} nghìn`
    } else {
      return ''
    }
  }
}
