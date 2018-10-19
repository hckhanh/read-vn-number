import Numbers from './Numbers'

/**
 * A group three numbers, a component in billion position of the input number
 */
export default class Billion extends Numbers {
  public read(firstNumber?: boolean, beforeBillion?: boolean): string {
    return `${super.read(firstNumber)} tỉ`.trim()
  }
}
