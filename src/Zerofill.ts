import Numbers from './Numbers'

/**
 * A group three numbers, this component will deal with three zero numbers
 */
export default abstract class Zerofill extends Numbers {
  /**
   * The name come after the value of {@link Numbers}
   */
  protected abstract get unitName(): string

  public read(firstNumber?: boolean): string {
    if (this.first !== '0' || this.second !== '0' || this.last !== '0') {
      return `${super.read(firstNumber)} ${this.unitName}`
    } else {
      return ''
    }
  }
}
