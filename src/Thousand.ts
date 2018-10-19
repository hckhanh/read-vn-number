import Zerofill from './Zerofill'

/**
 * A group three numbers, a component in thousand position of the input number
 */
export default class Thousand extends Zerofill {
  protected get unitName() {
    return 'nghìn'
  }
}
