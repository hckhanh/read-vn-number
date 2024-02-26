import { describe, expect, it } from 'vitest'
import Million from '../src/Million'

describe('Million', function () {
  it('should read first number: 10.100.000', function () {
    const million = new Million('10')
    expect(million.read(true)).to.equal('mười triệu')
  })

  it('should read number: 1.000.100.000', function () {
    const million = new Million('000')
    expect(million.read()).to.equal('')
  })

  it('should read number: 100.100.000', function () {
    const million = new Million('100')
    expect(million.read()).to.equal('một trăm triệu')
  })
})
