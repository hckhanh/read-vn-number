import Numbers from './Numbers'

/**
 * A group three numbers, a component in billion position of the input number
 */
export default class Billion extends Numbers {
  public read(firstNumber?: boolean): string {
    return `${super.read(firstNumber)} tỷ`.trim()
  }
}
