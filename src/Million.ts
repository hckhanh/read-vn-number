import Zerofill from './Zerofill'

/**
 * A group three numbers, a component in a million position of the input number
 */
export default class MillionNumber extends Zerofill {
  protected get unitName(): string {
    return 'triệu'
  }
}
