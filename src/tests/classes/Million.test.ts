import { expect } from 'chai'
import Million from '../../Million'

describe('Thousand', function() {
  it('should read number: 000.100.000', function() {
    const million = new Million('000')
    expect(million.read()).to.equal('')
  })

  it('should read number: 100.100.000', function() {
    const million = new Million('100')
    expect(million.read()).to.equal('một trăm triệu')
  })
})
