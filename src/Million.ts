import Zerofill from './Zerofill'

/**
 * A group three numbers, a component in million position of the input number
 */
export default class MillionNumber extends Zerofill {
  protected get unitName(): string {
    return 'triệu'
  }
}
